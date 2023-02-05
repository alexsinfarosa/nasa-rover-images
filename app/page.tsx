import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Image from 'next/image'

const images = [
  {id: 1, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 2, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 3, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 4, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 5, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 6, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 7, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 8, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
  {id: 9, src: '/assets/astronaut.jpg', alt: 'Astronaut Image'},
]

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl">
        <div className="flex gap-x-4 px-2 sm:px-4 lg:px-8 mb-8">
          <aside className=" w-1/3">
            <h3 className="text-gray-500 mb-3">
              Galleries &middot;{' '}
              <span className="text-gray-900">Rover Database</span>
            </h3>
            <Image
              src="/assets/astronaut.jpg"
              alt="Astronaut Logo"
              className={`rounded-2xl h-[600px] w-[400px] object-cover`}
              width={400}
              height={600}
              priority
            />
          </aside>

          {/* Right Content */}
          <section className="w-2/3 border-l border-r border-b rounded-b-2xl px-6 shadow-custom">
            <div className="flex items-center">
              <Image
                src="/assets/planet.svg"
                alt="Planet Icon"
                width={108}
                height={108}
              />
              <div className="ml-4">
                <h2 className="font-semibold text-4xl">
                  NASA&apos;s Rover Database
                </h2>
                <h3 className="text-[#4D54FF] text-xl">
                  Our Public Gallery for Outer Space
                </h3>
              </div>
            </div>
            <hr className="h-[3px] bg-hr opacity-30 my-3 mx-auto rounded-sm"></hr>

            <p className="w-4/5 mb-12 tracking-wider">
              We want to see space throough you eyes! Take photos and uplad them
              to our publick library. out goal is to provide the latget database
              of quality images. Space is amazing! Let&apos;s caputure it
              together!
            </p>

            <div className="mb-4">
              <h2 className="font-bold text-2xl">Featured Images</h2>
              <h3 className="text-[#4D54FF] text-lg">Scroll to see more</h3>
            </div>

            <div className="flex overflow-x-scroll">
              <ul className="flex gap-x-3">
                {images.map(image => (
                  <li key={image.id} className="w-[240px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={`rounded-2xl h-[208px] w-[240px] object-cover`}
                      width={240}
                      height={208}
                      priority
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end mt-8">
              <button className="flex items-center mr-8 font-bold text-lg border-b border-white hover:border-b hover:border-gray-700">
                View Gallery
                <Image
                  src="/assets/right.svg"
                  alt="Arrow Icon"
                  className="ml-4 w-2"
                  width={12}
                  height={12}
                  priority
                />
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Moon Page */}
      <section className="relative h-[860px] overflow-y-hidden">
        <Card></Card>

        {/* Background Image */}
        <Image
          src="/assets/moon.jpg"
          alt="Moon Background Image"
          className="w-full object-cover"
          width={2237}
          height={2153}
          priority
        />

        <Footer></Footer>
      </section>
    </>
  )
}
