'use client'

import Image from 'next/image'
import { DownloadIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { MemoryImageTransition } from '@/components/memory-image-transition'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import { memories } from '@/lib/memories'

type MemoryCarouselProps = {
  initialIndex: number
  selectedIndex: number
  onIndexChange: (index: number) => void
}

function MemoryCarousel({
  initialIndex,
  selectedIndex,
  onIndexChange
}: MemoryCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [options] = useState(() => ({
    align: 'start' as const,
    loop: false,
    skipSnaps: false,
    startIndex: initialIndex
  }))
  const [initialTrackStyle] = useState(() => ({
    transform: `translate3d(-${initialIndex * 100}%, 0, 0)`
  }))

  useEffect(() => {
    if (!api) {
      return
    }

    if (api.selectedScrollSnap() !== selectedIndex) {
      api.scrollTo(selectedIndex, true)
    }

    const handleSelect = () => {
      const nextIndex = api.selectedScrollSnap()

      if (nextIndex !== selectedIndex) {
        onIndexChange(nextIndex)
      }
    }

    api.on('select', handleSelect)

    return () => {
      api.off('select', handleSelect)
    }
  }, [api, onIndexChange, selectedIndex])

  useEffect(() => {
    if (!api) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        event.stopPropagation()
        api.scrollPrev(true)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        event.stopPropagation()
        api.scrollNext(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown, true)

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true)
    }
  }, [api])

  const selectedMemory = memories[selectedIndex]

  if (!selectedMemory) {
    return null
  }

  return (
    <Carousel
      setApi={setApi}
      opts={options}
      aria-label='Memories'
      className='h-full w-full outline-none'
    >
      <div className='absolute top-[max(1rem,env(safe-area-inset-top))] left-4 z-20 sm:left-6'>
        <DialogClose asChild>
          <Button variant='quiet' size='label'>
            all memories
          </Button>
        </DialogClose>
      </div>

      <div className='absolute top-[max(1rem,env(safe-area-inset-top))] right-4 z-20 sm:right-6'>
        <Button asChild variant='quiet' size='icon-sm'>
          <a
            href={selectedMemory.image.src}
            download={`memories-of-mum-${selectedMemory.slug}.jpg`}
            aria-label={`Download ${selectedMemory.title}`}
            title={`Download ${selectedMemory.title}`}
          >
            <DownloadIcon data-icon='inline-start' />
          </a>
        </Button>
      </div>

      <CarouselContent
        className='ml-0 h-full [touch-action:pan-y_pinch-zoom]'
        style={initialTrackStyle}
      >
        {memories.map((memory, index) => (
          <CarouselItem
            key={memory.slug}
            aria-label={`${index + 1} of ${memories.length}`}
            className='h-full pl-0'
          >
            <div className='flex h-dvh w-full items-center justify-center px-2 pt-16 pb-20 sm:px-8 lg:px-16 lg:pt-14 lg:pb-14'>
              <MemoryImageTransition
                active={index === selectedIndex}
                slug={memory.slug}
              >
                <Image
                  src={memory.image}
                  alt={memory.alt}
                  sizes='(max-width: 639px) calc(100vw - 1rem), (max-width: 1023px) calc(100vw - 4rem), min(52rem, calc(100vw - 8rem))'
                  quality={90}
                  loading={index === selectedIndex ? 'eager' : 'lazy'}
                  fetchPriority={index === selectedIndex ? 'high' : 'auto'}
                  placeholder='blur'
                  draggable={false}
                  className='h-auto max-h-[calc(100dvh-9rem)] w-full max-w-[calc(100vw-1rem)] rounded-[2px] bg-card object-contain sm:max-w-[calc(100vw-4rem)] lg:max-h-[calc(100dvh-7rem)] lg:max-w-[52rem]'
                />
              </MemoryImageTransition>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        variant='quiet'
        size='icon-lg'
        className='top-auto bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-20 translate-y-0 sm:left-6 lg:top-1/2 lg:bottom-auto lg:left-6 lg:-translate-y-1/2'
      />
      <CarouselNext
        variant='quiet'
        size='icon-lg'
        className='top-auto right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-20 translate-y-0 sm:right-6 lg:top-1/2 lg:right-6 lg:bottom-auto lg:-translate-y-1/2'
      />

      <p
        aria-live='polite'
        className='pointer-events-none absolute bottom-[max(1.65rem,calc(env(safe-area-inset-bottom)+0.65rem))] left-1/2 z-20 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground tabular-nums'
      >
        {String(selectedIndex + 1).padStart(2, '0')} / {memories.length}
      </p>
    </Carousel>
  )
}

type MemoryViewerProps = {
  selectedIndex: number | undefined
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function MemoryViewer({
  selectedIndex,
  onClose,
  onIndexChange
}: MemoryViewerProps) {
  const selectedMemory =
    selectedIndex === undefined ? undefined : memories[selectedIndex]
  const isOpen = selectedMemory !== undefined

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className='inset-0 top-0 left-0 block h-dvh w-full max-w-none translate-x-0 translate-y-0 gap-0 rounded-none border-0 bg-background p-0 shadow-none sm:max-w-none'
      >
        <DialogTitle className='sr-only'>
          {selectedMemory?.alt ?? 'Memory'}
        </DialogTitle>
        <DialogDescription className='sr-only'>
          Swipe or use the left and right arrow keys to move between memories.
        </DialogDescription>

        {selectedIndex !== undefined ? (
          <MemoryCarousel
            initialIndex={selectedIndex}
            selectedIndex={selectedIndex}
            onIndexChange={onIndexChange}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
