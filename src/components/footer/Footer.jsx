'use client'
import Image from 'next/image'
import styles from './Footer.module.css'
import logoCDV from '@/assets/images/logo_footer.png'
import Link from 'next/link'
import Email from '@/assets/icons/Email'
import Facebook from '@/assets/icons/Facebook'
import Instagram from '@/assets/icons/Instagram'
import Whatsapp from '@/assets/icons/Whatsapp'
import Mobile from '@/assets/icons/Mobile'
import Location from '@/assets/icons/Location'
import Clock from '@/assets/icons/Clock'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.full_content}>
        <div className={styles.content_list}>
          <div className={styles.logo}>
            <Image src={logoCDV} alt='logo' width={70} height={70} />
            <div className={styles.text}>
              <h3>Cerrajeria del Valle</h3>
              <span>Expertos en cerrajeria</span>
            </div>
          </div>
          <div className={styles.list}>
            <h5>Información</h5>
            <ul>
              <Link href='https://wa.me/+1166344522' target='_blank'>
                <li>
                  <Mobile color='white' />
                  +1166344522
                </li>
              </Link>
              <Link href='mailto:hernancarrazan33@gmail.com' target='_blank'>
                <li>
                  <Email color='white' />
                  hernancarrazan33@gmail.com
                </li>
              </Link>
              <Link
                href='https://www.google.com/maps/place/Juan+B.+Justo+130,+Isidro+Casanova'
                target='_blank'
              >
                <li>
                  <Location color='white' />
                  Av. san juan 3183, CABA.
                </li>
              </Link>
              <li>
                <Clock color='white' />
                <p>LUN-VIE: 9:00 AM - 19:00 PM</p>
              </li>
            </ul>
          </div>
          <div className={styles.navigation}>
            <h5>Navegación</h5>
            <ul>
              <Link href={'/#home'}>
                <li>Inicio</li>
              </Link>
              <Link href={'/#servicios'}>
                <li>Servicios</li>
              </Link>
              <Link href={'/#sobrenosotros'}>
                <li>Sobre Nosotros</li>
              </Link>
              <Link href={'/#contacto'}>
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
          <div className={styles.social}>
            <h5>Redes Sociales</h5>
            <div className={styles.social_list}>
              <Link
                href='https://www.facebook.com/profile.php?id=100089499019169'
                target='_blank'
              >
                <span>
                  <Facebook color='white' />
                </span>
              </Link>
              <Link
                href='https://www.instagram.com/cerrajeriadelvalle33_'
                target='_blank'
              >
                <span>
                  <Instagram color='white' />
                </span>
              </Link>
              <Link href='https://wa.me/+1166344522' target='_blank'>
                <span>
                  <Whatsapp color='white' />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.copyright}>
          <p>© 2025, Todos los derechos reservados Cerrajeria del Valle.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
