import { ViewTransition, type ReactNode } from 'react'

function getMemoryImageTransitionName(slug: string) {
  return `memory-image-${slug}`
}

export function MemoryImageTransition({
  active,
  children,
  slug
}: {
  active: boolean
  children: ReactNode
  slug: string
}) {
  if (!active) {
    return children
  }

  return (
    <ViewTransition
      name={getMemoryImageTransitionName(slug)}
      share='morph'
      default='none'
    >
      {children}
    </ViewTransition>
  )
}
