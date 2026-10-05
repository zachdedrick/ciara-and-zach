import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: 'What should I wear?',
    answer: (
      <>
        <p>
          See the{' '}
          <Link to="/itinerary" className="underline hover:text-gold-600">
            Itinerary page
          </Link>{' '}
          for the dress code for each event.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>Ladies, bring a shawl &mdash; evenings can turn cool.</li>
          <li>Bring a raincoat &mdash; Irish weather is unpredictable!</li>
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
