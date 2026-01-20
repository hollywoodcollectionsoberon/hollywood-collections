import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hollywood Collections - Premium Ladies & Kids Fashion | Kalamassery',
  description:
    'Discover premium ladies kurthis, party wear & kids dresses at Hollywood Collections. 18+ years of trusted service in Kalamassery & Ernakulam. Online store coming soon!',
  keywords:
    'ladies fashion, kids dresses, kurthis, party wear, Kalamassery, Ernakulam, textile store',
  openGraph: {
    title: 'Hollywood Collections - Premium Fashion Store',
    description: 'Premium ladies & kids fashion with 18+ years of excellence',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
