import Image from 'next/image'
import { servicios } from './services'
import styles from './Servicios.module.css'
import Check from '@/assets/icons/Check'
import CarrucelMobile from './CarrucelMobile/CarrucelMobile'

const Servicios = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container_card}>
          {servicios.map((service, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={service.image}
                alt={service.titulo}
                width={150}
                height={150}
                style={{ width: '150px', height: '150px' }}
              />
              <div className={styles.info}>
                <h3>{service.titulo}</h3>
                <p>{service.descripcion}</p>
                <div className={styles.detalles}>
                  {service.detalles.map((detalle, index) => (
                    <div key={index} className={styles.detalle}>
                      <p>
                        <i>
                          <Check width='23px' height='23px' />
                        </i>
                        {detalle.nombre}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <CarrucelMobile />
      </div>
    </div>
  )
}

export default Servicios
