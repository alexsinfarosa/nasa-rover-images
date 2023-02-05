import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {href: '#', text: 'Contact Us'},
  {href: '#', text: 'About Us'},
  {href: '#', text: 'Privacy Policy'},
  {href: '#', text: 'Sitemap'},
  {href: '#', text: 'Terms & Conditions'},
]

export default function Footer() {
  return (
    <footer className="bg-primary absolute bottom-0 w-full text-white">
      <div className="mx-auto py-4 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6">
          {footerLinks.map(item => (
            <Link
              key={item.text}
              href={item.href}
              className="text-sm font-light"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Image
              src="/assets/earth-white.svg"
              alt="Earth Logo"
              className={`h-8 w-8`}
              width={16}
              height={16}
              priority
            />
          </div>
          <p className="text-center text-xs leading-5 font-light ml-2">NASA</p>
        </div>
      </div>
    </footer>
  )
}
