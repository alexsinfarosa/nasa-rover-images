import Image from 'next/image'
import styles from '../page.module.css'

export default function GalleriesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.galleryLayout}>
        <aside>
          <h3>
            Galleries <strong>Space Database</strong>
          </h3>
          <Image
            src="/assets/astronaut.jpg"
            alt="Astronaut Logo"
            // className={styles.earthLogo}
            width={450}
            height={600}
            priority
          />
        </aside>

        <section>
          <h2>NASA&apos;s Space Database</h2>
          <h3>Our Public Gallery for Outer Space</h3>

          <p>
            We want to see space throough you eyes! Take photos and uplad the ot
            our publick library. out goal is to provide the latget database of
            quality images. Space is amazing! Let&apos;s caputure it together!
          </p>
        </section>
      </div>
    </main>
  )
}
