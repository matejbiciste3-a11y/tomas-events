import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tomas Events - Discord komunita plná akcí',
  description: 'Pravidelné eventy na Discordu, Minecraft server s prémiovými funkcemi a skvělá komunita. Připoj se k nám!',
  keywords: 'discord, eventy, minecraft, gaming, komunita',
  authors: [{ name: 'Tomas Events Team' }],
  openGraph: {
    title: 'Tomas Events',
    description: 'Připoj se k nejlepší herní komunitě na Discordu!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}