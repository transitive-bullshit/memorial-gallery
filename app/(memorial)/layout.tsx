import type { ReactNode } from 'react'

import { MemorialGallery } from '@/components/memorial-gallery'

export default function MemorialLayout({ children }: { children: ReactNode }) {
  return <MemorialGallery>{children}</MemorialGallery>
}
