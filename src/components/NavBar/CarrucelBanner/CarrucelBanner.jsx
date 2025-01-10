'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './CarrucelBanner.module.css'
import Email from '@/assets/icons/Email'
import Whatsapp from '@/assets/icons/Whatsapp'
import Location from '@/assets/icons/Location'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarrucelBanner = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const infoBanner = [
    {
      info: 'delvallecerrajeria@gmail.com',
      icon: <Email width='20px' height='20px' />,
      href: 'mailto:delvallecerrajeria@gmail.com',
    },
    {
      info: 'Av San Juan 3183, CABA',
      icon: <Location width='20px' height='20px' />,
      href: 'https://www.google.com/maps?q=Av+San+Juan+3183,+CABA',
    },
    {
      info: '+54 9 11 6634 4522',
      icon: <Whatsapp width='20px' height='20px' />,
      href: 'https://wa.me/5491166344522',
    },
  ]

  const carouselSettings = {
    autoPlay: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: false,
    interval: 4000,
  }

  if (!isClient) {
    return null
  }

  return (
    <div className={styles.slider_banner}>
      <Carousel {...carouselSettings} className={styles.carousel}>
        {infoBanner.map((item, index) => (
          <Link
            href={item.href}
            className={styles.slider_item}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>{item.icon}</i>
            <p>{item.info}</p>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}

export default CarrucelBanner
