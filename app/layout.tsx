import {Noto_Sans} from '@next/font/google'
import './globals.css'
import TopNav from './TopNav'

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={notoSans.className}>
        <TopNav></TopNav>
        {children}
      </body>
    </html>
  )
}
