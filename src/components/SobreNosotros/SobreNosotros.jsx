import Image from 'next/image'
import styles from './SobreNosotros.module.css'
import Key from '@/assets/icons/Key'

const SobreNosotros = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>El mejor servicio de cerrajería de caba</h2>
        <p>
          Contamos con más de 15 años de experiencia brindando soluciones
          integrales de seguridad a nuestros clientes. Ubicados en el corazón de
          San Cristóbal, CABA, nos hemos consolidado como una empresa de
          confianza, especializada en todo tipo de servicios de cerrajería para
          sectores automotriz, comercial, residencial, bancario, industrial,
          consorcios y judiciales.
        </p>
      </div>
    </section>
  )
}

export default SobreNosotros
