import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Fintech Ladies - the network for women in finance and tech',
  description: 'The Fintech Ladies are a network for women in finance and tech. Headquartered in Berlin, the network has expanded to various cities all over Europe.',
  keywords: 'fintech ladies europe finance industry tech network diversity empowerment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-lato">{children}</body>
    </html>
  )
}