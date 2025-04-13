import type { Metadata } from 'next'
import { Poppins, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import logo from '../../public/logo.svg'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque'
})

export const metadata: Metadata = {
  title: 'Jussela Nascimento | Official Website',
  description:
    'Official website of Jussela Nascimento and all related products',
  keywords: [],
  icons: {
    icon: 'logo.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt'>
      <body
        className={`${poppins.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
