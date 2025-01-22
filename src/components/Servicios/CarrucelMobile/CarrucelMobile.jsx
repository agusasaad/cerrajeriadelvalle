'use client'
import styles from './CarrucelMobile.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { servicios } from '../services'
import Check from '@/assets/icons/Check'
import Image from 'next/image'
import Arrow from '@/assets/icons/Arrow'

const CarrucelMobile = () => {
  const carouselSettings = {
    autoPlay: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: false,
    interval: 6000,
  }
  return (
    <Carousel {...carouselSettings} className={styles.carousel}>
      {servicios.map((service, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={service.image}
            alt={service.titulo}
            width={130}
            height={130}
            style={{ width: '130px', height: '130px' }}
          />
          <div className={styles.info}>
            <h3>{service.titulo}</h3>
            {/* <p>{service.descripcion}</p> */}
            <div className={styles.detalles}>
              {service.detalles.map((detalle, index) => (
                <div key={index} className={styles.detalle}>
                  <p>
                    <i>
                      <Arrow width='23px' height='23px' color='var(--blue)' />
                    </i>
                    {detalle.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default CarrucelMobile
