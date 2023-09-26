import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'

const poppins = Poppins(
  { 
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'] 
  })
const montserrat = Montserrat(
{ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat' 
})

export const metadata: Metadata = {
  title: 'Vitoria Hillary',
  description: 'This is Vitoria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.variable} bg-pink-400`}>
        <Navbar/> 
        <main className='h-screen px-4 pt-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
