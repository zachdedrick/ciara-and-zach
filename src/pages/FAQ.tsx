import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: 'What should I wear?',
    answer: (
      <>
        <p>Check the invite for dress code.</p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>Ladies, bring a shawl &mdash; evenings can turn cool.</li>
          <li>Pack a raincoat &mdash; Irish weather is unpredictable!</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Should I rent a car?',
    answer: (
      <>
        <p>
          Renting a car will be convenient for those traveling around Ireland before or after the wedding &mdash;
          just remember to drive on the left ;)
        </p>
        <p className="mt-2">
          If you&rsquo;re planning on driving yourself to and from the ceremony in Armagh, be sure to tell your car
          rental provider that you&rsquo;ll be in Northern Ireland!
        </p>
      </>
    ),
  },
  {
    question: 'Can I stay at Castle Leslie?',
    answer: (
      <p>
        You can stay on the Castle Leslie Estate in either The Lodge or the Old Stable Mews, just call the hotel
        directly to book and say you&rsquo;re there for our wedding! See the{' '}
        <Link to="/travel" className="underline hover:text-gold-600">
          Travel &amp; Accommodation
        </Link>{' '}
        page for more details.
      </p>
    ),
  },
  {
    question: 'Where should we stay?',
    answer: (
      <p>
        Most of the weekend will be spent in Glaslough itself, so staying on the estate or in the village will be
        most convenient &mdash; but Monaghan is only a 10 minute drive away :)
      </p>
    ),
  },
  {
    question: 'Travel Tips',
    answer: (
      <p>
        For your flight home, Dublin airport has its own customs and immigration that you complete after the
        initial security, so be sure to leave yourself enough time! We&rsquo;d recommend around 2&ndash;3 hours for
        international flights.
      </p>
    ),
  },
]

export default function FAQ() {
  return (
    <div>
      <PageHeader title="FAQ" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-16">
        {FAQS.map((faq, index) => (
          <Reveal key={faq.question} delayMs={index * 80} className="rounded-lg border border-ivy-100 p-5">
            <h2 className="font-display text-xl text-ivy-800">{faq.question}</h2>
            <div className="mt-2 text-ivy-700">{faq.answer}</div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
