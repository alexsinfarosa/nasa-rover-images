import Menu from "@/components/MenuDropdown";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Missions", href: "#" },
  { name: "Galleries", href: "#" },
  { name: "NASA Audience", href: "#" },
  { name: "Downloads", href: "#" },
  { name: "NASA TV", href: "#" },
  { name: "About", href: "#" },
];

export default function TopNav() {
  return (
    <div className="mx-auto mb-8 max-w-7xl px-2 sm:px-4 lg:px-8">
      <div className="relative flex items-center justify-center py-8">
        <div className="flex items-center space-x-12 px-2 lg:px-0">
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
          <h1 className="text-5xl font-light">NASA</h1>
        </div>
      </div>
      <nav className="flex items-center justify-center" aria-label="Global">
        <div className="relative flex gap-x-20">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="border-b border-white text-lg leading-none text-gray-900 hover:border-b hover:border-linkHover"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <hr className="my-5 mx-auto h-[2px] w-4/5 bg-gray-100"></hr>

      <div className="flex justify-end">
        <ul className="-mr-2 flex gap-x-8">
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
            <Menu></Menu>
          </li>
        </ul>
      </div>
    </div>
  );
}
