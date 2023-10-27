import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Metadata is necessary for what you see in the tabs
export const metadata: Metadata = {
  title: 'Jordan | Portfolio',
  description: "Jordan is an up and coming full-stack developer.",
}

// This is the root component of the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
