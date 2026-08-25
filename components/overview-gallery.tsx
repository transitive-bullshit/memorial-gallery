'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Random } from 'random'
import { useState, type ComponentProps } from 'react'

import { MemoryImageTransition } from '@/components/memory-image-transition'
import { memories, type Memory } from '@/lib/memories'

type ScatteredCard = Readonly<{
  memory: Memory
  offsetX: number
  offsetY: number
  rotation: number
}>

function round(value: number) {
  return Math.round(value * 100) / 100
}

function createScatteredCards(seed: string): readonly ScatteredCard[] {
  const random = new Random(seed)

  return [...memories].map((memory) => ({
    memory,
    offsetX: round(random.float(-9, 9)),
    offsetY: round(random.float(-7, 7)),
    rotation: round(random.float(-2.25, 2.25))
  }))
}

// cards are static so every page sees the same arrangement
const cards = createScatteredCards('memories-of-mum-v1')

function HoverPrefetchLink(
  props: Omit<ComponentProps<typeof Link>, 'prefetch'>
) {
  const [active, setActive] = useState(false)

  return (
    <Link
      {...props}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    />
  )
}

export function OverviewGallery({
  imageTransitionsActive,
  isCovered
}: {
  imageTransitionsActive: boolean
  isCovered: boolean
}) {
  return (
    <section
      aria-hidden={isCovered || undefined}
      aria-labelledby='memories-title'
      className='mx-auto min-h-screen w-full max-w-[96rem] px-4 pt-12 pb-24 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20'
      inert={isCovered}
    >
      <h1
        id='memories-title'
        className='pl-1 text-[0.7rem] font-medium tracking-[0.18em] text-muted-foreground lowercase'
      >
        memories of mum
      </h1>

      <ul className='mt-12 grid grid-cols-1 gap-x-5 gap-y-10 sm:mt-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16 2xl:grid-cols-5'>
        {cards.map(({ memory, offsetX, offsetY, rotation }, index) => (
          <li
            key={memory.slug}
            style={{
              transform: `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${rotation}deg)`
            }}
          >
            <HoverPrefetchLink
              href={`/memory/${memory.slug}`}
              scroll={false}
              transitionTypes={['memory-open']}
              aria-label={`Open ${memory.alt}`}
              className='memory-overview-card block rounded-[2px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background'
            >
              <MemoryImageTransition
                active={imageTransitionsActive}
                slug={memory.slug}
              >
                <Image
                  src={memory.image}
                  alt={memory.alt}
                  sizes='(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 29vw, (max-width: 1535px) 22vw, 18vw'
                  quality={90}
                  loading={index < 6 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  placeholder='blur'
                  draggable={false}
                  className='h-auto w-full rounded-[2px] bg-card object-contain shadow-[0_10px_30px_rgba(43,40,36,0.09)] ring-1 ring-foreground/5'
                />
              </MemoryImageTransition>
            </HoverPrefetchLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
