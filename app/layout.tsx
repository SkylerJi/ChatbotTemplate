import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Theya Chatbot',
  description: 'Check out Theya!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={`${inter.className} h-screen overflow-hidden`}>
      <main className="bg-gradient-to-b from-black to-orange-800">
  {children}
</main>
        </body>

   
     
    </html>
  )
}
