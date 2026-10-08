import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

type Guest = {
  id: string
  full_name: string
  invited_to_rehearsal_dinner: boolean
  plus_one_allowed: boolean
}

type ExistingRsvp = {
  email: string | null
  welcome_party_attending: boolean
  ceremony_reception_attending: boolean
  rehearsal_dinner_attending: boolean | null
  bringing_guest: boolean
  guest_of_name: string | null
  message: string | null
}

type Step = 'search' | 'choose' | 'form' | 'success'

// Flip this to true once invitations have gone out and the guest list is loaded.
const RSVP_OPEN = false

export default function RSVP() {
  const [step, setStep] = useState<Step>('search')
  const [query, setQuery] = useState('')
  const [matches, setMatches] = useState<Guest[]>([])
  const [guest, setGuest] = useState<Guest | null>(null)
  const [existing, setExisting] = useState<ExistingRsvp | null>(null)
  const [searching, setSearching] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || !query.trim()) return

    setSearching(true)
    setErrorMessage('')

    const { data, error } = await supabase
      .from('guests')
      .select('id, full_name, invited_to_rehearsal_dinner, plus_one_allowed')
      .ilike('full_name', `%${query.trim()}%`)

    setSearching(false)

    if (error) {
      setErrorMessage(error.message)
      return
    }

    if (!data || data.length === 0) {
      setMatches([])
      setErrorMessage(
        "We couldn't find that name on the guest list. Double check the spelling, or reach out to us directly.",
      )
      return
    }

    if (data.length === 1) {
      await selectGuest(data[0])
      return
    }

    setMatches(data)
    setStep('choose')
  }

  async function selectGuest(selected: Guest) {
    if (!supabase) return
    setGuest(selected)
    setErrorMessage('')

    const { data } = await supabase
      .from('rsvps')
      .select(
        'email, welcome_party_attending, ceremony_reception_attending, rehearsal_dinner_attending, bringing_guest, guest_of_name, message',
      )
      .eq('guest_id', selected.id)
      .maybeSingle()

    setExisting(data ?? null)
    setStep('form')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || !guest) return

    const form = new FormData(event.currentTarget)
    setSubmitting(true)
    setErrorMessage('')

    const { error } = await supabase.from('rsvps').upsert(
      {
        guest_id: guest.id,
        email: form.get('email') || null,
        welcome_party_attending: form.get('welcome_party') === 'yes',
        ceremony_reception_attending: form.get('ceremony_reception') === 'yes',
        rehearsal_dinner_attending: guest.invited_to_rehearsal_dinner
          ? form.get('rehearsal_dinner') === 'yes'
          : null,
        bringing_guest: form.get('bringing_guest') === 'on',
        guest_of_name: form.get('guest_of_name') || null,
        message: form.get('message') || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'guest_id' },
    )

    setSubmitting(false)

    if (error) {
      setErrorMessage(error.message)
      return
    }

    setStep('success')
  }

  if (!RSVP_OPEN) {
    return (
      <div>
        <PageHeader title="RSVP" />
        <div className="mx-auto max-w-xl px-4 py-16 text-center text-lg text-ivy-700">
          <p>Still finalizing details of the weekend! Please RSVP once you get your invitation.</p>
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

        {step === 'search' && (
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

        {step === 'choose' && (
          <div className="space-y-3">
            <p className="text-center text-ivy-700">We found a few matches &mdash; which one is you?</p>
            {matches.map((match) => (
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

        {step === 'form' && guest && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-center text-ivy-700">
              Hi <span className="font-display text-lg">{guest.full_name}</span>! Let us know your plans below.
            </p>

            <EventQuestion
              name="welcome_party"
              label="Welcome Party"
              defaultValue={existing?.welcome_party_attending}
            />

            <EventQuestion
              name="ceremony_reception"
              label="Ceremony & Reception"
              defaultValue={existing?.ceremony_reception_attending}
            />

            {guest.invited_to_rehearsal_dinner && (
              <EventQuestion
                name="rehearsal_dinner"
                label="Rehearsal Dinner"
                defaultValue={existing?.rehearsal_dinner_attending ?? undefined}
              />
            )}

            {guest.plus_one_allowed && (
              <div>
                <label className="flex items-center gap-2 text-ivy-700">
                  <input
                    type="checkbox"
                    name="bringing_guest"
                    defaultChecked={existing?.bringing_guest ?? false}
                  />
                  I&rsquo;m bringing a guest
                </label>
                <input
                  name="guest_of_name"
                  placeholder="Guest's name"
                  defaultValue={existing?.guest_of_name ?? ''}
                  className="mt-2 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm text-ivy-800">
                Email (so we can reach you with details)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={existing?.email ?? ''}
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
                defaultValue={existing?.message ?? ''}
                className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
              />
            </div>

            {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-ivy-700 py-2.5 text-parchment transition-colors hover:bg-ivy-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Sending…' : existing ? 'Update RSVP' : 'Send RSVP'}
            </button>
          </form>
        )}

        {step === 'success' && (
          <p className="text-center text-lg text-ivy-700">Thank you &mdash; your RSVP has been received!</p>
        )}
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
  defaultValue?: boolean
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
