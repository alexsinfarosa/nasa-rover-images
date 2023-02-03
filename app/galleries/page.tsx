import Image from 'next/image'
import styles from '../page.module.css'

export default function GalleriesPage() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.galleryLayout}>
          <aside>
            <h3>
              Galleries &middot;{' '}
              <span style={{fontWeight: 400, color: 'black'}}>
                Space Database
              </span>
            </h3>
            <Image
              src="/assets/astronaut.jpg"
              alt="Astronaut Logo"
              className={styles.leftContentLogo}
              width={516}
              height={671}
              priority
            />
          </aside>

          <section>
            <div className={styles.topContent}>
              <div className={styles.title}>
                <Image
                  src="/assets/planet.svg"
                  alt="Planet Icon"
                  className={styles.planetIcon}
                  width={108}
                  height={108}
                  priority
                />
                <div>
                  <h2>NASA&apos;s Space Database</h2>
                  <h3>Our Public Gallery for Outer Space</h3>
                </div>
              </div>

              <hr></hr>

              <p>
                We want to see space throough you eyes! Take photos and uplad
                them to our publick library. out goal is to provide the latget
                database of quality images. Space is amazing! Let&apos;s
                caputure it together!
              </p>
            </div>

            <div className={styles.featuredImages}>
              <h2>Featured Images</h2>
              <h3>Scroll to see more</h3>

              <ul>
                <li>
                  <Image
                    src="/assets/astronaut.jpg"
                    alt="Planet Icon"
                    className={styles.featuredImage}
                    width={240}
                    height={208}
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/assets/astronaut.jpg"
                    alt="Planet Icon"
                    className={styles.featuredImage}
                    width={240}
                    height={208}
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/assets/astronaut.jpg"
                    alt="Planet Icon"
                    className={styles.featuredImage}
                    width={240}
                    height={208}
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/assets/astronaut.jpg"
                    alt="Planet Icon"
                    className={styles.featuredImage}
                    width={240}
                    height={208}
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/assets/astronaut.jpg"
                    alt="Planet Icon"
                    className={styles.featuredImage}
                    width={240}
                    height={208}
                    priority
                  />
                </li>
              </ul>

              <div className={styles.right}>
                <button className={styles.viewButton}>
                  View Gallery
                  <Image
                    src="/assets/right.svg"
                    alt="Arrow Icon"
                    className={styles.rightIcon}
                    width={12}
                    height={12}
                    priority
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.bottomContent}>
        <div className={styles.card}>
          <h2>Upload Your Photos</h2>
          <hr className={styles.hr}></hr>
          <p>
            Select up to 5 high quality images to upload into our database. If
            your image is selected, a member of our team will contact you for
            atribution.
          </p>

          <button>
            <Image
              src="/assets/upload.svg"
              alt="Upload Image"
              // className={styles.moonImage}
              width={300}
              height={100}
              priority
            />
            Drag & Drop Your Images
          </button>
        </div>
        <Image
          src="/assets/moon.jpg"
          alt="Moon Background Image"
          className={styles.moonImage}
          width={2237}
          height={2153}
          priority
        />
      </div>
    </main>
  )
}
