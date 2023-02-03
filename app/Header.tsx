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
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/assets/earth.svg"
          alt="Earth Logo"
          className={styles.earthLogo}
          width={100}
          height={64}
          priority
        />
        <h1 className={styles.h1}>NASA</h1>
      </div>
      <nav>
        <ul>
          {links.map(({name, href}) => (
            <li key={href}>
              <Link key={href} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
