import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SupraCalm | Votre allié naturel contre le stress',
  description:
    'SupraCalm — Boisson adaptogène naturelle pour plus de calme, de concentration et un meilleur sommeil. Paiement à la livraison.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e2a5e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="light bg-background">
      <body className={`${geist.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
