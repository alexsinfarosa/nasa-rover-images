import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Images from "@/components/Images";
import Image from "next/image";

type Camera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};

type Rover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
};

export type Photo = {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
};

async function getPhotos(): Promise<{ photos: Photo[] }> {
  // const randomPage = Math.floor(Math.random() * 15) + 1
  const randomPage = 1;
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${randomPage}&api_key=DEMO_KEY`;
  const response = await fetch(URL, { next: { revalidate: 86400 } });
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  const data: { photos: Photo[] } = await response.json();
  return data;
}

export default async function Home() {
  const { photos } = await getPhotos();

  return (
    <>
      <main className="mx-auto max-w-7xl pb-8">
        <div className="mb-8 flex gap-x-4 px-2 sm:px-4 lg:px-8">
          <aside className=" w-1/3">
            <h2 className="mb-3 text-gray-500">
              Galleries &middot;{" "}
              <span className="text-gray-900">Mars Rover Database</span>
            </h2>
            <Image
              src="/assets/astronaut.jpg"
              alt="Astronaut Logo"
              className={`h-[600px] w-[400px] rounded-2xl object-cover`}
              width={400}
              height={600}
              priority
            />
          </aside>

          {/* Right Content */}
          <section className="w-2/3 rounded-b-2xl border-l border-r border-b px-6 shadow-custom">
            <div className="flex items-center">
              <Image
                src="/assets/planet.svg"
                alt="Planet Icon"
                width={108}
                height={108}
              />
              <div className="ml-4">
                <h2 className="text-4xl font-semibold">
                  NASA&apos;s Mars Rover Database
                </h2>
                <h3 className="text-xl text-[#4D54FF]">
                  Our Public Gallery for Outer Space
                </h3>
              </div>
            </div>
            <hr className="my-3 mx-auto h-[3px] rounded-sm bg-hr opacity-30"></hr>

            <p className="mb-12 w-4/5 tracking-wider">
              We want to see space through your eyes! Take photos and upload
              them to our public library. Our goal is to provide the largest
              database of quality images. Space is amazing! Let&apos;s capture
              it together!
            </p>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Featured Images</h2>
              <h3 className="text-lg text-[#4D54FF]">Scroll to see more</h3>
            </div>

            <Images photos={photos}></Images>

            <div className="mt-5 flex justify-end">
              <button className="mr-8 flex items-center border-b border-white text-lg font-bold hover:border-b hover:border-gray-700">
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
  );
}
