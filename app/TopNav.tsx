import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  {name: 'Missions', href: '#'},
  {name: 'Galleries', href: '#'},
  {name: 'NASA Audience', href: '#'},
  {name: 'Downloads', href: '#'},
  {name: 'NASA TV', href: '#'},
  {name: 'About', href: '#'},
]

export default function TopNav() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mb-8">
      <div className="relative flex items-center justify-center py-8">
        <div className="flex items-center px-2 lg:px-0 space-x-12">
          <div className="flex-shrink-0">
            <Image
              src="/assets/earth.svg"
              alt="Earth Logo"
              className={`h-16 w-16`}
              width={64}
              height={64}
              priority
            />
          </div>
          <h1 className="font-light text-5xl">NASA</h1>
        </div>
      </div>
      <nav className="flex items-center justify-center" aria-label="Global">
        <ul className="flex gap-x-20">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className=" text-lg text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <hr className="h-[2px] bg-gray-100 my-5 w-4/5 mx-auto"></hr>

      <div className="flex justify-end">
        <ul className="flex gap-x-8 -mr-2">
          <li>
            <Image
              src="/assets/search.svg"
              alt="Search icon"
              className={`h-5 w-5`}
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src="/assets/share.svg"
              alt="Share icon"
              className={`h-5 w-5`}
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src="/assets/menu.svg"
              alt="Menu icon"
              className={`h-5 w-5`}
              width={20}
              height={20}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
