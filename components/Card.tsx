'use client'
import Image from 'next/image'
import React from 'react'

export default function Card() {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-8 py-6 max-w-2xl">
      <h2 className="font-semibold text-4xl">Upload Your Photos</h2>
      <hr className="h-[3px] bg-hr opacity-30 my-3 mx-auto rounded-sm"></hr>
      <p className="mb-6 tracking-wide">
        Select up to 5 high quality images to upload into our database. If your
        image is selected, a member of our team will contact you for atribution.
      </p>

      <div className="flex justify-center my-2 py-2">
        <button
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="inline-flex items-center rounded-3xl border border-secondary bg-white px-8 py-6 text-base font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-secondary border-dashed hover:border-gray-300 hover:text-gray-500 outline outline-1 outline-offset-2"
        >
          {isHovered ? (
            <Image
              src="/assets/upload-gray.svg"
              alt="Upload Image"
              className="w-8 h-8 mr-4"
              width={56}
              height={56}
              priority
            />
          ) : (
            <Image
              src="/assets/upload.svg"
              alt="Upload Image"
              className="w-8 h-8 mr-4"
              width={56}
              height={56}
              priority
            />
          )}
          Drag & Drop Your Images
        </button>
      </div>
    </div>
  )
}
