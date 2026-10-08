import WatercolorDivider from './WatercolorDivider'

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-ivy-700 px-4 py-5 text-center text-parchment sm:py-7">
      <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-2 text-lg text-ivy-100">{subtitle}</p>}
      <WatercolorDivider className="my-0" size="sm" />
    </div>
  )
}
