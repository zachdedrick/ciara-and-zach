import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function RSVP() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return

    const form = new FormData(event.currentTarget)
    setStatus('submitting')
    setErrorMessage('')

    const { error } = await supabase.from('rsvps').insert({
      name: form.get('name'),
      email: form.get('email'),
      attending: form.get('attending') === 'yes',
      guest_count: Number(form.get('guest_count') ?? 1),
      message: form.get('message') || null,
    })

    if (error) {
      setStatus('error')
      setErrorMessage(error.message)
      return
    }

    setStatus('success')
    event.currentTarget.reset()
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

        {status === 'success' ? (
          <p className="text-center text-lg text-ivy-700">Thank you &mdash; your RSVP has been received!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-ivy-800">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-ivy-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <span className="block text-sm text-ivy-800">Will you be attending?</span>
              <div className="mt-1 flex gap-6">
                <label className="flex items-center gap-2 text-ivy-700">
                  <input type="radio" name="attending" value="yes" defaultChecked required />
                  Joyfully accept
                </label>
                <label className="flex items-center gap-2 text-ivy-700">
                  <input type="radio" name="attending" value="no" />
                  Regretfully decline
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="guest_count" className="block text-sm text-ivy-800">
                Number of guests (including you)
              </label>
              <input
                id="guest_count"
                name="guest_count"
                type="number"
                min={1}
                defaultValue={1}
                className="mt-1 w-24 rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
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
                className="mt-1 w-full rounded-md border border-ivy-100 px-3 py-2 focus:border-gold-500 focus:outline-none"
              />
            </div>

            {status === 'error' && <p className="text-sm text-red-600">{errorMessage}</p>}

            <button
              type="submit"
              disabled={!isSupabaseConfigured || status === 'submitting'}
              className="w-full rounded-md bg-ivy-700 py-2.5 text-parchment transition-colors hover:bg-ivy-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending…' : 'Send RSVP'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
