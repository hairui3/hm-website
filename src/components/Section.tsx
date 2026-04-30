import { cn } from '@/lib/utils'

export default function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn('relative mx-auto w-full max-w-[1200px] px-6 sm:px-8', className)}
    >
      {children}
    </section>
  )
}

