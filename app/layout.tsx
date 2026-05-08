import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Focus Time Blocker — Block Discord During Deep Work',
  description: 'Browser extension that automatically blocks Discord during your calendar focus blocks. Stay in flow, ship more code.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c3124f2b-5f2b-46bc-b623-67f469b5e4a2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
