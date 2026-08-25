'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, type ReactNode } from 'react'

import { MemoryViewer } from '@/components/memory-viewer'
import { ScatteredOverview } from '@/components/scattered-overview'
import { getMemoryIndexBySlug, memories } from '@/lib/memories'

function getSelectedIndex(pathname: string) {
  const match = /^\/memory\/([^/]+)$/.exec(pathname)

  if (!match?.[1]) {
    return undefined
  }

  return getMemoryIndexBySlug(decodeURIComponent(match[1]))
}

export function MemorialGallery({
  children,
  overviewSeed
}: {
  children: ReactNode
  overviewSeed: string
}) {
  const pathname = usePathname()
  const router = useRouter()
  const selectedIndex = getSelectedIndex(pathname)

  const closeMemory = useCallback(() => {
    router.replace('/', {
      scroll: false,
      transitionTypes: ['memory-close']
    })
  }, [router])

  const selectMemory = useCallback(
    (index: number) => {
      const memory = memories[index]

      if (memory) {
        router.replace(`/memory/${memory.slug}`, { scroll: false })
      }
    },
    [router]
  )

  return (
    <main className='min-h-screen bg-background text-foreground'>
      <ScatteredOverview
        imageTransitionsActive={selectedIndex === undefined}
        seed={overviewSeed}
      />
      {children}
      <MemoryViewer
        selectedIndex={selectedIndex}
        onClose={closeMemory}
        onIndexChange={selectMemory}
      />
    </main>
  )
}
