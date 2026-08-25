import type { ReactNode } from 'react'

import { MemorialGallery } from '@/components/memorial-gallery'

// Change this one value to create a new deterministic overview arrangement.
const overviewSeed = 'memories-of-mum-v1'

export default function MemorialLayout({ children }: { children: ReactNode }) {
  return (
    <MemorialGallery overviewSeed={overviewSeed}>{children}</MemorialGallery>
  )
}
