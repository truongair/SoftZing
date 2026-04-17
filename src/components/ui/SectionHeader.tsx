interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-wider text-content-secondary mb-3 mt-6 first:mt-0">
      {title}
    </h2>
  )
}
