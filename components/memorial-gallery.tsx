'use client'

import { useCallback, useRef, useState } from 'react'

import { MemoryViewer } from '@/components/memory-viewer'
import { OverviewGallery } from '@/components/overview-gallery'
import { memories } from '@/lib/memories'

type ViewerState = Readonly<{
  isOpen: boolean
  selectedIndex: number
}>

const initialViewerState: ViewerState = {
  isOpen: false,
  selectedIndex: 0
}

function SourceFooter() {
  return (
    <footer className='mx-auto flex max-w-[96rem] justify-end px-4 pb-4'>
      <a
        href='https://github.com/transitive-bullshit/memorial-gallery'
        target='_blank'
        rel='noreferrer'
        aria-label='View source on GitHub'
        title='View source on GitHub'
        className='inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
      >
        <svg
          aria-hidden='true'
          viewBox='0 0 24 24'
          className='size-6'
          fill='currentColor'
        >
          <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.177 6.839 9.5.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.702-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.84a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.701 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .267.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z' />
        </svg>
      </a>
    </footer>
  )
}

export function MemorialGallery() {
  const [viewer, setViewer] = useState<ViewerState>(initialViewerState)
  const selectedCard = useRef<HTMLButtonElement | null>(null)

  const closeMemory = useCallback(() => {
    setViewer((current) =>
      current.isOpen ? { ...current, isOpen: false } : current
    )
  }, [])

  const selectMemory = useCallback(
    (index: number, trigger: HTMLButtonElement) => {
      if (memories[index]) {
        selectedCard.current = trigger
        setViewer({ isOpen: true, selectedIndex: index })
      }
    },
    []
  )

  const changeMemory = useCallback((index: number) => {
    if (memories[index]) {
      setViewer((current) => ({ ...current, selectedIndex: index }))
    }
  }, [])

  const restoreGalleryFocus = useCallback(() => {
    selectedCard.current?.focus()
  }, [])

  return (
    <main className='min-h-screen bg-background text-foreground'>
      <div aria-hidden={viewer.isOpen || undefined} inert={viewer.isOpen}>
        <OverviewGallery onSelect={selectMemory} />
        <SourceFooter />
      </div>
      <MemoryViewer
        isOpen={viewer.isOpen}
        selectedIndex={viewer.selectedIndex}
        onClose={closeMemory}
        onCloseAutoFocus={restoreGalleryFocus}
        onIndexChange={changeMemory}
      />
    </main>
  )
}
