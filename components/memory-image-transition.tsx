import { ViewTransition, type ReactNode } from 'react'

function getMemoryImageTransitionName(slug: string) {
  return `memory-image-${slug}`
}

const memoryImageShare = {
  'memory-open': 'morph',
  'memory-close': 'morph-return',
  default: 'morph-return'
} as const

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
      share={memoryImageShare}
      default='none'
    >
      {children}
    </ViewTransition>
  )
}
