'use client'
import Link from 'next/link'
import styles from './NavBar.module.css'
import CarrucelBanner from './CarrucelBanner/CarrucelBanner'
import Menu from '@/assets/icons/Menu'
import Contact from '@/assets/icons/Contact'
import Close from '@/assets/icons/Close'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className={styles.header}>
      <CarrucelBanner />
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt='logo' width={380} height={380} />
        </div>
        <ul className={showMenu ? styles.show : ''}>
          <li>
            <Link
              href={'/#home'}
              className={styles.link}
              onClick={() => setShowMenu(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href={'/#servicios'}
              className={styles.link}
              onClick={() => setShowMenu(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href={'/#sobrenosotros'}
              className={styles.link}
              onClick={() => setShowMenu(false)}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href={'/#contacto'}
              className={styles.link}
              onClick={() => setShowMenu(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
        <div className={styles.action_button}>
          <Link href={'tel:+1166344522'}>
            <Contact width='20px' height='20px' className={styles.icon} />
            Llama ahora!
          </Link>
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
