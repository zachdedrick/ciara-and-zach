import PageHeader from '../components/PageHeader'

export default function ThingsToDo() {
  return (
    <div>
      <PageHeader title="Things to Do" subtitle="Making the most of Ireland" />
      <div className="mx-auto max-w-3xl px-4 py-16 text-center text-ivy-700">
        <p>Local recommendations &mdash; sights, pubs, and day trips &mdash; will go here.</p>
      </div>
    </div>
  )
}
