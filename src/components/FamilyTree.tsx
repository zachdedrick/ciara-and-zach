import type { ReactNode } from 'react'

function TreeCard({
  name,
  relation,
  emphasized = false,
  muted = false,
}: {
  name: string
  relation?: string
  emphasized?: boolean
  muted?: boolean
}) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-center shadow-sm ${
        emphasized ? 'border-gold-500 bg-ivy-700 text-parchment' : 'border-ivy-100 bg-ivy-50'
      } ${muted ? 'border-dashed opacity-60' : ''}`}
    >
      <p className={`font-display text-sm whitespace-nowrap sm:text-base ${emphasized ? 'text-parchment' : 'text-ivy-800'}`}>
        {name}
      </p>
      {relation && (
        <p className={`text-[10px] uppercase tracking-wide ${emphasized ? 'text-gold-300' : 'text-gold-600'}`}>
          {relation}
        </p>
      )}
    </div>
  )
}

function VLine({ className = 'h-6' }: { className?: string }) {
  return <div className={`mx-auto w-px bg-gold-400/70 ${className}`} aria-hidden="true" />
}

function Branch({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <VLine />
      <div className="inline-flex flex-wrap justify-center gap-x-4 gap-y-4 border-t border-gold-400/70 pt-4">
        {children}
      </div>
    </div>
  )
}

function Leaf({ name, relation, emphasized }: { name: string; relation?: string; emphasized?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <VLine className="h-4" />
      <TreeCard name={name} relation={relation} emphasized={emphasized} />
    </div>
  )
}

export default function FamilyTree() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max flex-col items-center px-2">
        <div className="flex flex-wrap items-end justify-center gap-12">
          {/* Mom's side */}
          <div className="flex flex-col items-center">
            <TreeCard name="Brigid &amp; Padraic Flanagan" relation="Mom's Parents" />
            <Branch>
              <Leaf name="Brigid" />
              <Leaf name="Patrick" />
              <Leaf name="Michael" />
              <Leaf name="Anne" />
              <Leaf name="Brian" />
              <Leaf name="Catherine" />
            </Branch>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-gold-600">Mom&rsquo;s Siblings</p>
            <VLine className="h-6" />
            <TreeCard name="Barbara" relation="Ciara's Mom" />
          </div>

          {/* Dad's side */}
          <div className="flex flex-col items-center">
            <TreeCard name="Andy&rsquo;s Parents" relation="Great-Grandparents &middot; Ireland" muted />
            <VLine className="h-6" />
            <TreeCard name="Rita &amp; Andy Lawlor" relation="Dad's Parents" />
            <Branch>
              <Leaf name="Katie" relation="Dad's Sister" />
            </Branch>
            <VLine className="h-6" />
            <TreeCard name="David" relation="Ciara's Dad" />
          </div>
        </div>

        {/* Merge Barbara & David */}
        <div className="mt-0 inline-flex gap-12 border-b border-gold-400/70">
          <div className="h-6 w-px bg-gold-400/70" />
          <div className="h-6 w-px bg-gold-400/70" />
        </div>
        <VLine className="h-6" />
        <TreeCard name="Barbara &amp; David" relation="Ciara's Parents" emphasized />

        <Branch>
          <Leaf name="Catherine" relation="Ciara's Sister" />
          <Leaf name="Ciara" relation="That's Me!" emphasized />
          <Leaf name="Olivia" relation="Ciara's Sister" />
        </Branch>
      </div>
    </div>
  )
}
