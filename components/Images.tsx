'use client'
import type {Photo} from '@/app/page'
import Image from 'next/image'

export default function Images({photos}: {photos: Photo[]}) {
  return (
    <div className="flex overflow-x-scroll">
      <ul className="flex gap-x-4">
        {photos.map((photo: Photo) => (
          <li key={photo.id}>
            <button
              type="button"
              aria-labelledby="image"
              className="focus:outline-none focus:ring-2 rounded-2xl focus:ring-secondary focus:ring-offset-2 w-[210px] h-[208px] my-1 relative"
              onClick={() => console.log('Clicked ' + photo.id)}
            >
              <Image
                id="image"
                src={photo.img_src}
                alt={`Photo of Mars Rover - id:${photo.id}`}
                className={`rounded-2xl h-[208px] w-[210px] object-cover absolute z-0 inset-0`}
                width={210}
                height={208}
                priority
              />

              <div className="opacity-0 hover:opacity-100 hover:bg-black/70 rounded-2xl duration-300 absolute z-10 inset-0 flex justify-center items-center text-white font-semibold text-xl">
                <div className="text-xs px-2 w-full space-y-1">
                  <p className="flex justify-around items-center w-full">
                    <span>Rover:</span>
                    <span className="">{photo.rover.name}</span>
                  </p>

                  <p className="flex justify-around items-center w-full">
                    <span>Launch Date:</span>
                    <span className="">{photo.rover.launch_date}</span>
                  </p>

                  <p className="flex justify-around items-center w-full">
                    <span>Lending Date:</span>
                    <span className="">{photo.rover.landing_date}</span>
                  </p>

                  <p className="flex justify-around items-center w-full">
                    <span>Earth Date:</span>
                    <span className="">{photo.earth_date}</span>
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
