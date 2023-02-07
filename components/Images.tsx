"use client";
import type { Photo } from "@/app/page";
import Image from "next/image";

export default function Images({ photos }: { photos: Photo[] }) {
  return (
    <div className="flex overflow-x-scroll">
      <ul className="flex gap-x-4">
        {photos.map((photo: Photo) => (
          <li key={photo.id}>
            <button
              type="button"
              aria-labelledby={`image-${photo.id}`}
              className="relative my-1 h-[208px] w-[210px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              onClick={() => console.log("Clicked " + photo.id)}
            >
              <Image
                id={`image-${photo.id}`}
                src={photo.img_src}
                alt={`Photo of Mars Rover - id:${photo.id}`}
                className={`absolute inset-0 z-0 h-[208px] w-[210px] rounded-2xl object-cover`}
                width={210}
                height={208}
              />

              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl text-xl font-semibold text-white opacity-0 duration-300 hover:bg-black/70 hover:opacity-100">
                <div className="w-full space-y-1 px-2 text-xs">
                  <p className="flex w-full items-center justify-around">
                    <span>Rover:</span>
                    <span className="">{photo.rover.name}</span>
                  </p>

                  <p className="flex w-full items-center justify-around">
                    <span>Launch Date:</span>
                    <span className="">{photo.rover.launch_date}</span>
                  </p>

                  <p className="flex w-full items-center justify-around">
                    <span>Lending Date:</span>
                    <span className="">{photo.rover.landing_date}</span>
                  </p>

                  <p className="flex w-full items-center justify-around">
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
  );
}
