import Image from 'next/image'
import styles from './InfoServicio.module.css'
import img from '@/assets/images/pngwing.com.png'

const InfoServicio = () => {
  return (
    <section className={styles.container}>
      <Image src={img} alt='imagen' width={270} height={270} />
      <div className={styles.content}>
        <h2>Cerrajería del Valle 24 hrs.</h2>
        <p>
          Contamos con servicio de cerrajero a domicilio con un equipo móvil de
          acuerdo a sus necesidades, de rápido traslado buscando así solucionar
          cualquier urgencia las 24hrs. Lo atendemos de Lunes a Viernes de 09 a
          19hrs y Sábados de 09 a 14hrs.
        </p>
      </div>
    </section>
  )
}

export default InfoServicio
