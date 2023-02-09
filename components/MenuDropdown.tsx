"use client";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

const dropdownItems = [
  {
    name: "Humans in Space",
    href: "#",
  },
  {
    name: "Moon to Mars",
    href: "#",
  },
  {
    name: "Earth",
    href: "#",
  },
  {
    name: "Space Tech",
    href: "#",
  },
  {
    name: "Solar System & Beyond",
    href: "#",
  },
  {
    name: "STEM Engagement",
    href: "#",
  },
  {
    name: "History",
    href: "#",
  },
  {
    name: "Benefits To You",
    href: "#",
  },
];

export default function MenuDropdown() {
  return (
    <>
      <Menu as="div" className="relative z-10 inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="">
                {open ? (
                  <Image
                    src="/assets/close.svg"
                    alt="Menu icon"
                    className={`h-5 w-5`}
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/assets/menu.svg"
                    alt="Menu icon"
                    className={`h-5 w-5`}
                    width={20}
                    height={20}
                  />
                )}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="divide-y px-4 py-3">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className=" inline-block w-full py-2 text-sm hover:font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}
