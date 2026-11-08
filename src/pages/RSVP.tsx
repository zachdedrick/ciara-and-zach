import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

type Guest = {
  id: string
  party_id: string
  full_name: string
  invited_to_rehearsal_dinner: boolean
}

type PartyInfo = {
  id: string
  contact_email: string | null
  message: string | null
}

type SearchState =
  | { step: 'search' }
  | { step: 'choose'; matches: Guest[] }
  | { step: 'party'; guests: Guest[]; party: PartyInfo }
  | { step: 'success' }

// Flip this to true once invitations have gone out and the guest list is loaded.
const RSVP_OPEN = false

async function searchGuests(query: string) {
  if (!supabase) return { guests: [] as Guest[], error: null as string | null }
  const { data, error } = await supabase
    .from('guests')
    .select('id, party_id, full_name, invited_to_rehearsal_dinner')
    .ilike('full_name', `%${query.trim()}%`)
  return { guests: (data as Guest[] | null) ?? [], error: error?.message ?? null }
}

async function fetchParty(partyId: string) {
  if (!supabase) return { guests: [] as Guest[], party: null as PartyInfo | null, error: null as string | null }

  const [guestsResult, partyResult] = await Promise.all([
    supabase
      .from('guests')
      .select('id, party_id, full_name, invited_to_rehearsal_dinner')
      .eq('party_id', partyId)
      .order('created_at', { ascending: true }),
    supabase.from('parties').select('id, contact_email, message').eq('id', partyId).single(),
  ])

  if (guestsResult.error) return { guests: [], party: null, error: guestsResult.error.message }
  if (partyResult.error) return { guests: [], party: null, error: partyResult.error.message }

  return { guests: (guestsResult.data as Guest[]) ?? [], party: partyResult.data as PartyInfo, error: null }
}

export default function RSVP() {
  if (!RSVP_OPEN) {
    return (
      <div>
        <PageHeader title="RSVP" />
        <div className="mx-auto max-w-xl px-4 py-16">
          <p className="text-center text-lg text-ivy-700">
            Please let us know your initial travel plans so we can finalize the details and come back to RSVP once
            your invitation arrives :)
          </p>
          <PreRsvpQuestionnaire />
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title="RSVP" subtitle="We can't wait to celebrate with you" />
      <div className="mx-auto max-w-xl px-4 py-16">
        {!isSupabaseConfigured && (
          <p className="mb-6 rounded-md bg-gold-300/30 px-4 py-3 text-center text-sm text-ivy-800">
            RSVP submissions aren&rsquo;t connected yet &mdash; add Supabase credentials to enable this form.
          </p>
        )}
        <OfficialRsvp />
      </div>
    </div>
  )
}

function OfficialRsvp() {
  const [state, setState] = useState<SearchState>({ step: 'search' })
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [existingRsvps, setExistingRsvps] = useState<Record<string, ExistingRsvp>>({})

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || !query.trim()) return

    setSearching(true)
    setErrorMessage('')

    const { guests, error } = await searchGuests(query)
    setSearching(false)

    if (error) {
      setErrorMessage(error)
      return
    }

    if (guests.length === 0) {
      setErrorMessage(
        "We couldn't find that name on the guest list. Double check the spelling, or reach out to us directly.",
      )
      return
    }

    if (guests.length === 1) {
      await selectGuest(guests[0])
      return
    }

    setState({ step: 'choose', matches: guests })
  }

  async function selectGuest(selected: Guest) {
    if (!supabase) return
    setErrorMessage('')

    const { guests, party, error } = await fetchParty(selected.party_id)
    if (error || !party) {
      setErrorMessage(error ?? 'Something went wrong loading your party.')
      return
    }

    const { data: rsvpRows } = await supabase
      .from('rsvps')
      .select('guest_id, welcome_party_attending, ceremony_reception_attending, rehearsal_dinner_attending')
      .in(
        'guest_id',
        guests.map((g) => g.id),
      )

    const existing: Record<string, ExistingRsvp> = {}
    for (const row of rsvpRows ?? []) {
      existing[row.guest_id] = row
    }
    setExistingRsvps(existing)
    setState({ step: 'party', guests, party })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || state.step !== 'party') return

    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    setErrorMessage('')

    const rsvpRows = state.guests.map((guest) => ({
      guest_id: guest.id,
      welcome_party_attending: form.get(`welcome_party:${guest.id}`) === 'yes',
      ceremony_reception_attending: form.get(`ceremony_reception:${guest.id}`) === 'yes',
      rehearsal_dinner_attending: guest.invited_to_rehearsal_dinner
        ? form.get(`rehearsal_dinner:${guest.id}`) === 'yes'
        : null,
      updated_at: new Date().toISOString(),
    }))

    const { error: rsvpError } = await supabase.from('rsvps').upsert(rsvpRows, { onConflict: 'guest_id' })

    const { error: partyError } = await supabase
      .from('parties')
      .update({
        contact_email: form.get('email') || null,
        message: form.get('message') || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', state.party.id)

    setSubmitting(false)

    const error = rsvpError ?? partyError
    if (error) {
      setErrorMessage(error.message)
      return
    }

    setState({ step: 'success' })
  }

  return (
    <>
      {state.step === 'search' && (
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label htmlFor="query" className="block text-sm text-ivy-800">
              Enter your full name as it appears on your invitation
            </label>
            <input
              id="query"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              required
              className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
            />
          </div>

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={!isSupabaseConfigured || searching}
            className="w-full rounded-md bg-ivy-700 py-2.5 text-parchment transition-colors hover:bg-ivy-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {searching ? 'Searching…' : 'Find my invitation'}
          </button>
        </form>
      )}

      {state.step === 'choose' && (
        <div className="space-y-3">
          <p className="text-center text-ivy-700">We found a few matches &mdash; which one is you?</p>
          {state.matches.map((match) => (
            <button
              key={match.id}
              type="button"
              onClick={() => selectGuest(match)}
              className="w-full rounded-md border border-ivy-100 px-4 py-2.5 text-left text-ivy-800 hover:border-gold-500"
            >
              {match.full_name}
            </button>
          ))}
        </div>
      )}

      {state.step === 'party' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-center text-ivy-700">
            {state.guests.length > 1
              ? 'We found your party below — let us know everyone’s plans.'
              : 'Let us know your plans below.'}
          </p>

          <div className="space-y-5">
            {state.guests.map((guest) => (
              <div key={guest.id} className="rounded-lg border border-ivy-100 p-4">
                <p className="font-display text-lg text-ivy-800">{guest.full_name}</p>
                <div className="mt-3 space-y-3">
                  <EventQuestion
                    name={`welcome_party:${guest.id}`}
                    label="Welcome Party"
                    defaultValue={existingRsvps[guest.id]?.welcome_party_attending}
                  />
                  <EventQuestion
                    name={`ceremony_reception:${guest.id}`}
                    label="Ceremony & Reception"
                    defaultValue={existingRsvps[guest.id]?.ceremony_reception_attending}
                  />
                  {guest.invited_to_rehearsal_dinner && (
                    <EventQuestion
                      name={`rehearsal_dinner:${guest.id}`}
                      label="Rehearsal Dinner"
                      defaultValue={existingRsvps[guest.id]?.rehearsal_dinner_attending ?? undefined}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-ivy-800">
              Email (so we can reach you with details)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={state.party.contact_email ?? ''}
              className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-ivy-800">
              Message for the couple (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              defaultValue={state.party.message ?? ''}
              className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
            />
          </div>

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-ivy-700 py-2.5 text-parchment transition-colors hover:bg-ivy-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? 'Sending…' : 'Send RSVP'}
          </button>
        </form>
      )}

      {state.step === 'success' && (
        <p className="text-center text-lg text-ivy-700">Thank you &mdash; your RSVP has been received!</p>
      )}
    </>
  )
}

type ExistingRsvp = {
  guest_id: string
  welcome_party_attending: boolean | null
  ceremony_reception_attending: boolean | null
  rehearsal_dinner_attending: boolean | null
}

type ExistingPreRsvp = {
  guest_id: string
  ceremony_reception_attending: string | null
  welcome_party: string | null
  driving_self: string | null
}

type PreRsvpState =
  | { step: 'search' }
  | { step: 'choose'; matches: Guest[] }
  | { step: 'party'; guests: Guest[] }
  | { step: 'success' }

function PreRsvpQuestionnaire() {
  const [state, setState] = useState<PreRsvpState>({ step: 'search' })
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [existing, setExisting] = useState<Record<string, ExistingPreRsvp>>({})

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || !query.trim()) return

    setSearching(true)
    setErrorMessage('')

    const { guests, error } = await searchGuests(query)
    setSearching(false)

    if (error) {
      setErrorMessage(error)
      return
    }

    if (guests.length === 0) {
      setErrorMessage(
        "We couldn't find that name on the guest list. Double check the spelling, or reach out to us directly.",
      )
      return
    }

    if (guests.length === 1) {
      await selectGuest(guests[0])
      return
    }

    setState({ step: 'choose', matches: guests })
  }

  async function selectGuest(selected: Guest) {
    if (!supabase) return
    setErrorMessage('')

    const { guests, error } = await fetchParty(selected.party_id)
    if (error) {
      setErrorMessage(error)
      return
    }

    const { data: rows } = await supabase
      .from('pre_rsvp_responses')
      .select('guest_id, ceremony_reception_attending, welcome_party, driving_self')
      .in(
        'guest_id',
        guests.map((g) => g.id),
      )

    const existingRows: Record<string, ExistingPreRsvp> = {}
    for (const row of rows ?? []) {
      existingRows[row.guest_id] = row
    }
    setExisting(existingRows)
    setState({ step: 'party', guests })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || state.step !== 'party') return

    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    setErrorMessage('')

    const rows = state.guests.map((guest) => ({
      guest_id: guest.id,
      ceremony_reception_attending: form.get(`ceremony_reception_attending:${guest.id}`),
      welcome_party: form.get(`welcome_party:${guest.id}`),
      driving_self: form.get(`driving_self:${guest.id}`),
      updated_at: new Date().toISOString(),
    }))

    const { error } = await supabase.from('pre_rsvp_responses').upsert(rows, { onConflict: 'guest_id' })

    setSubmitting(false)

    if (error) {
      setErrorMessage(error.message)
      return
    }

    setState({ step: 'success' })
  }

  if (state.step === 'success') {
    return (
      <div className="mt-10 border-t border-ivy-100 pt-10 text-center">
        <p className="font-display text-2xl text-ivy-800">Submitted!</p>
        <p className="mt-2 text-ivy-700">Thanks so much &mdash; this is a huge help as we plan!</p>
      </div>
    )
  }

  return (
    <div className="mt-10 border-t border-ivy-100 pt-10">
      {!isSupabaseConfigured && (
        <p className="mt-4 rounded-md bg-gold-300/30 px-4 py-3 text-center text-sm text-ivy-800">
          This questionnaire isn&rsquo;t connected yet &mdash; add Supabase credentials to enable it.
        </p>
      )}

      {state.step === 'search' && (
        <form onSubmit={handleSearch} className="mt-6 space-y-4">
          <div>
            <label htmlFor="pre-rsvp-query" className="block text-sm text-ivy-800">
              Enter your full name as it appears on your invitation
            </label>
            <input
              id="pre-rsvp-query"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              required
              className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
            />
          </div>

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={!isSupabaseConfigured || searching}
            className="w-full rounded-md bg-ivy-700 py-2.5 text-parchment transition-colors hover:bg-ivy-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {searching ? 'Searching…' : 'Find my invitation'}
          </button>
        </form>
      )}

      {state.step === 'choose' && (
        <div className="mt-6 space-y-3">
          <p className="text-center text-ivy-700">We found a few matches &mdash; which one is you?</p>
          {state.matches.map((match) => (
            <button
              key={match.id}
              type="button"
              onClick={() => selectGuest(match)}
              className="w-full rounded-md border border-ivy-100 px-4 py-2.5 text-left text-ivy-800 hover:border-gold-500"
            >
              {match.full_name}
            </button>
          ))}
        </div>
      )}

      {state.step === 'party' && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <p className="text-center text-ivy-700">
            {state.guests.length > 1
              ? 'We found your party below — let us know everyone’s plans so far.'
              : 'Let us know your plans so far.'}
          </p>

          <div className="space-y-6">
            {state.guests.map((guest) => (
              <div key={guest.id} className="rounded-lg border border-ivy-100 p-4">
                <p className="font-display text-lg text-ivy-800">{guest.full_name}</p>
                <div className="mt-3 space-y-4">
                  <QuestionnaireQuestion
                    name={`ceremony_reception_attending:${guest.id}`}
                    question="If you already know, will you be attending the Ceremony & Reception on Saturday 8/21/27?"
                    defaultValue={existing[guest.id]?.ceremony_reception_attending ?? undefined}
                    options={[
                      { value: 'yes', label: 'Yes!' },
                      { value: 'no', label: 'Sorry to miss!' },
                      { value: 'unsure', label: 'Still figuring it out!' },
                    ]}
                  />
                  <QuestionnaireQuestion
                    name={`welcome_party:${guest.id}`}
                    question="Are you planning on attending the welcome party?"
                    defaultValue={existing[guest.id]?.welcome_party ?? undefined}
                    options={[
                      { value: 'yes', label: 'Yes, wouldn’t miss it!' },
                      { value: 'unsure', label: 'Not totally sure yet' },
                      { value: 'no', label: 'No, but we’ll see you Saturday!' },
                    ]}
                  />
                  <QuestionnaireQuestion
                    name={`driving_self:${guest.id}`}
                    question="Will you be driving yourself to and from the Ceremony on Saturday?"
                    defaultValue={existing[guest.id]?.driving_self ?? undefined}
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No, I’ll be on the arranged guest transportation' },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-ivy-700 py-2.5 text-parchment transition-colors hover:bg-ivy-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? 'Sending…' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  )
}

function QuestionnaireQuestion({
  name,
  question,
  options,
  defaultValue,
}: {
  name: string
  question: string
  options: { value: string; label: string }[]
  defaultValue?: string
}) {
  return (
    <div>
      <span className="block text-sm text-ivy-800">{question}</span>
      <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 text-sm text-ivy-700">
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              required
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}

function EventQuestion({
  name,
  label,
  defaultValue,
}: {
  name: string
  label: string
  defaultValue?: boolean | null
}) {
  return (
    <div>
      <span className="block text-sm text-ivy-800">Will you attend the {label}?</span>
      <div className="mt-1 flex gap-6">
        <label className="flex items-center gap-2 text-ivy-700">
          <input type="radio" name={name} value="yes" defaultChecked={defaultValue !== false} required />
          Joyfully accept
        </label>
        <label className="flex items-center gap-2 text-ivy-700">
          <input type="radio" name={name} value="no" defaultChecked={defaultValue === false} />
          Regretfully decline
        </label>
      </div>
    </div>
  )
}
