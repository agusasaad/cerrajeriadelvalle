import Image from 'next/image'
import styles from './SobreNosotros.module.css'
import img from '@/assets/images/sobre_nosotros.png'
const SobreNosotros = () => {
  return (
    <section className={styles.container} id='sobrenosotros'>
      <div className={styles.content}>
        <Image
          src={img}
          alt='imagen'
          width={500}
          height={500}
          style={{ width: '300px', height: 'auto' }}
        />
        <div className={styles.text}>
          <h2>Sobre nosotros</h2>
          <p>
            Ubicados en el corazón de San Cristóbal, CABA, nos hemos consolidado
            como una empresa de confianza, especializada en todo tipo de
            servicios de cerrajería para sectores automotriz, comercial,
            residencial, bancario, industrial, consorcios y judiciales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
