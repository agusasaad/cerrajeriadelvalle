'use client'
import Link from 'next/link'
import styles from './NavBar.module.css'
import CarrucelBanner from './CarrucelBanner/CarrucelBanner'
import Menu from '@/assets/icons/Menu'
import Contact from '@/assets/icons/Contact'
import Close from '@/assets/icons/Close'
import { useState } from 'react'
import Image from 'next/image'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className={styles.header}>
      <CarrucelBanner />
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <p>Logo</p>
        </div>
        <ul className={showMenu ? styles.show : ''}>
          <li>
            <Link href={'/'} className={styles.link}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={'/'} className={styles.link}>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href={'/'} className={styles.link}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href={'/'} className={styles.link}>
              Contacto
            </Link>
          </li>
        </ul>
        <div className={styles.action_button}>
          <button>
            <Contact width='20px' height='20px' className={styles.icon} />
            Llama ahora!
          </button>
        </div>
        <div className={styles.menu}>
          <button aria-label='menu' onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <Close color={'var(--darkgrey)'} width='35px' height='35px' />
            ) : (
              <Menu color={'var(--darkgrey)'} width='35px' height='35px' />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
