'use client'
import Email from '@/assets/icons/Email'
import styles from './Contacto.module.css'
import dynamic from 'next/dynamic'
import Location from '@/assets/icons/Location'
import Whatsapp from '@/assets/icons/Whatsapp'
import Link from 'next/link'

const MapComponent = dynamic(() => import('./MapComponent/MapComponent'), {
  ssr: false,
})

const infoBanner = [
  {
    info: 'hernancarrazan33@gmail.com',
    icon: <Email width='25px' height='25px' color='var(--blue)' />,
    href: 'mailto:hernancarrazan33@gmail.com',
  },
  {
    info: 'Av San Juan 3183, CABA',
    icon: <Location width='25px' height='25px' color='var(--blue)' />,
    href: 'https://www.google.com/maps?q=Av+San+Juan+3183,+CABA',
  },
  {
    info: '+541166344522',
    icon: <Whatsapp width='25px' height='25px' color='var(--blue)' />,
    href: 'https://wa.me/+541166344522',
  },
]

const Contacto = () => {
  return (
    <section className={styles.container} id='contacto'>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Información de Contacto</h2>
          <p>
            No dudes en ponerte en contacto con nosotros, estamos a tu
            disposición para ayudarte en todo lo que necesites.
          </p>
          <div className={styles.info_contacto}>
            {infoBanner.map((info, index) => (
              <div key={index} className={styles.info_contacto_item}>
                {info.icon}
                <Link href={info.href}>{info.info}</Link>
              </div>
            ))}
          </div>
        </div>
        <MapComponent />
      </div>
    </section>
  )
}

export default Contacto
