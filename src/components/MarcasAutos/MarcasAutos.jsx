import Image from 'next/image'
import styles from './MarcasAutos.module.css'

const MarcasAutos = ({ marcas, text }) => {
  return (
    <div className={styles.slider}>
      <h2>{text}</h2>
      <div className={styles.move}>
        {marcas.map((image, index) => (
          <div className={styles.box} key={index}>
            <Image src={image} alt='' width={100} height={100} />
          </div>
        ))}
        {/* 2da vuelta */}
        {marcas.map((image, index) => (
          <div className={styles.box} key={index}>
            <Image src={image} alt='' width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarcasAutos
