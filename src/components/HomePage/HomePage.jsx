import Check from '@/assets/icons/Check'
import styles from './HomePage.module.css'
import FormContact from './FormContact/FormContact'

const HomePage = () => {
  return (
    <section className={styles.container} id='home'>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Cerrajería del Valle: Tu Solución Profesional En Cerrajería</h1>
          <div className={styles.tips}>
            <p>
              <i>
                <Check />
              </i>
              Urgencias 24 horas 365 días del año
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
