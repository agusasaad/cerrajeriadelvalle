import Check from '@/assets/icons/Check'
import styles from './HomePage.module.css'
import FormContact from './FormContact/FormContact'

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Cerrajería del Valle: Tu Solución Profesional En Cerrajería.</h1>
          <div className={styles.tips}>
            <p>
              <i>
                <Check />
              </i>
              Urgencias las 24hs del dia
            </p>
            <p>
              <i>
                <Check />
              </i>
              Más de 15 años de experiencia
            </p>
            <p>
              <i>
                <Check />
              </i>
              Hogares, empresas y vehículos
            </p>
          </div>
        </div>
        <FormContact />
      </div>
    </section>
  )
}

export default HomePage
