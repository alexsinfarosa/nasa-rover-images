'use client'
import type {Photo} from '@/app/page'
import Image from 'next/image'

export default function Images({photos}: {photos: Photo[]}) {
  return (
    <div className="flex overflow-x-scroll">
      <ul className="flex gap-x-4">
        {photos.map((photo: Photo) => (
          <li key={photo.id} className="w-[210px] my-1">
            <button
              type="button"
              aria-labelledby="image"
              className="shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 rounded-2xl focus:ring-secondary focus:ring-offset-2"
              onClick={() => console.log('Clicked ' + photo.id)}
            >
              <Image
                id="image"
                src={photo.img_src}
                alt={`Photo of Mars Rover - id:${photo.id}`}
                className={`rounded-2xl h-[208px] w-[210px] object-cover`}
                width={210}
                height={208}
                priority
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
