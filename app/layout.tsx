import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedRefill — Smart Medication Refill Reminders',
  description: 'Tracks medication taking patterns and automatically adjusts refill reminders based on actual consumption vs prescribed dosage.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b726d7b9-dbbe-4226-a574-45ed9ed0c0ea"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
