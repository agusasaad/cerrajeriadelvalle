import Image from 'next/image'
import { marcas } from './Imagenes'
import styles from './Marcas.module.css'

const Marcas = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {marcas.map((marca, index) => (
          <Image
            key={index}
            src={marca}
            alt={`Marca ${index}`}
            width={150}
            height={150}
          />
        ))}
      </div>
    </section>
  )
}

export default Marcas
