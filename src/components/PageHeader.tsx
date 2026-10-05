import WatercolorDivider from './WatercolorDivider'

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-ivy-700 px-4 py-8 text-center text-parchment sm:py-10">
      <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-3 text-lg text-ivy-100">{subtitle}</p>}
      <WatercolorDivider className="my-1" size="sm" />
    </div>
  )
}
