import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getMemoryBySlug, memories } from '@/lib/memories'

type MemoryPageProps = {
  params: Promise<{ slug: string }>
}

const description = 'A memory from a quiet collection of moments with Mum.'

export const dynamicParams = false

export function generateStaticParams() {
  return memories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params
}: MemoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const memory = getMemoryBySlug(slug)

  if (!memory) {
    notFound()
  }

  const title = `${memory.title} — memories of mum`
  const image = {
    url: memory.image.src,
    width: memory.image.width,
    height: memory.image.height,
    alt: memory.alt
  }

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/memory/${memory.slug}`
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `/memory/${memory.slug}`,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  }
}

export default async function MemoryPage({ params }: MemoryPageProps) {
  const { slug } = await params

  if (!getMemoryBySlug(slug)) {
    notFound()
  }

  return null
}
