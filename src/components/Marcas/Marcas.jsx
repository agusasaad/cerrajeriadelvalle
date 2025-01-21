import Image from 'next/image'
import styles from './Marcas.module.css'

const Marcas = ({ marcas, direction = 'left', text }) => {
  const duplicateImages = [...marcas, ...marcas]

  const animationClass =
    direction === 'left' ? styles['images-left'] : styles['images-right']

  return (
    <section className={styles.container}>
      <h2>{text}</h2>
      <div className={styles.content}>
        <div className={`${styles.images} ${animationClass}`}>
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
