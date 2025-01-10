import Image from 'next/image'
import { marcas } from './Imagenes'
import styles from './Marcas.module.css'

const Marcas = () => {
  const duplicateImages = [...marcas, ...marcas]
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.images}>
          {duplicateImages.map((marca, index) => (
            <Image
              key={index}
              src={marca}
              alt={`Marca ${index}`}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marcas
