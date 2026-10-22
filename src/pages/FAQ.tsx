import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const GLOSSARY = [
  { term: 'Craic', definition: 'Fun, good times, or news. "What’s the craic?" means "what’s up?"' },
  { term: 'Gas', definition: 'Hilarious. "That’s gas!"' },
  { term: 'Grand', definition: 'Fine, good, no problem at all. "I’m grand."' },
  { term: 'Sláinte', definition: '("SLAWN-cha") Cheers! Said before a drink — literally "health."' },
  { term: 'Eejit', definition: 'A fool — usually said with affection, not malice.' },
  { term: 'Deadly', definition: 'Excellent, awesome (nothing dangerous about it).' },
  { term: 'Fair play', definition: 'Well done, respect.' },
  { term: 'Yer man / yer one', definition: 'That guy / that woman, when you don’t know or won’t say their name.' },
  { term: 'Give out', definition: 'To complain or scold. "She gave out to him."' },
  { term: 'Savage', definition: 'Amazing, brilliant (also nothing to do with being savage).' },
]

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

        <Reveal delayMs={FAQS.length * 80}>
          <h2 className="font-display text-center text-2xl text-ivy-800">Irish Slang &amp; Glossary</h2>
          <p className="text-center text-sm uppercase tracking-wide text-gold-600">So You&rsquo;re Not Lost at the Bar</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {GLOSSARY.map((entry) => (
              <div key={entry.term} className="rounded-lg border border-ivy-100 p-4">
                <p className="font-display text-lg text-gold-600">{entry.term}</p>
                <p className="mt-1 text-sm text-ivy-700">{entry.definition}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
