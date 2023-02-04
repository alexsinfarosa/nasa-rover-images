import {Noto_Sans} from '@next/font/google'
import './globals.css'
import TopNav from './TopNav'

const noto = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-noto',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className={`${noto.className} h-full`}>
        <TopNav />
        {children}
      </body>
    </html>
  )
}
