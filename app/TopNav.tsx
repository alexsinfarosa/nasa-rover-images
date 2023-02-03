import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const links = [
  {
    name: 'Missions',
    href: '/missions',
  },
  {name: 'Galleries', href: '/galleries'},
  {name: 'NASA Audience', href: '/nasa-audience'},
  {name: 'Downloads', href: '/downloads'},
  {name: 'NASA TV', href: '/nasa-tv'},
  {name: 'About', href: '/about'},
]

export default function HeaderComponent() {
  return (
    <header className={styles.topNav}>
      <div className={styles.logo}>
        <Image
          src="/assets/earth.svg"
          alt="Earth Logo"
          className={styles.earthLogo}
          width={68}
          height={68}
          priority
        />
        <h1 className={styles.h1}>NASA</h1>
      </div>
      <nav>
        <ul className={styles.menu}>
          {links.map(({name, href}) => (
            <li key={href}>
              <Link key={href} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.secondaryNav}>
        <ul>
          <li>
            <Image
              src="/assets/search.svg"
              alt="Search icon"
              className={styles.secondaryNavLogo}
              width={16}
              height={16}
              priority
            />
          </li>
          <li>
            <Image
              src="/assets/share.svg"
              alt="Share icon"
              className={styles.secondaryNavLogo}
              width={16}
              height={16}
              priority
            />
          </li>
          <li>
            {' '}
            <Image
              src="/assets/menu.svg"
              alt="Menu icon"
              className={styles.secondaryNavLogo}
              width={16}
              height={16}
              priority
            />
          </li>
        </ul>
      </div>
    </header>
  )
}
