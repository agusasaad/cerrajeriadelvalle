import Image from 'next/image'
import { servicios } from './services'
import styles from './Servicios.module.css'
import Check from '@/assets/icons/Check'
import CarrucelMobile from './CarrucelMobile/CarrucelMobile'
import Marcas from '../MarcasAutos/MarcasAutos'
import Arrow from '@/assets/icons/Arrow'

const Servicios = () => {
  return (
    <section className={styles.container} id='servicios'>
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
                          <Arrow
                            width='23px'
                            height='23px'
                            color='var(--blue)'
                          />
                        </i>
                        {detalle.nombre}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <button>Ver más</button> */}
            </div>
          ))}
        </div>
        <CarrucelMobile />
      </div>
    </section>
  )
}

export default Servicios
