import HomePage from '@/components/HomePage/HomePage'
import styles from './page.module.css'
import InfoServicio from '@/components/InfoServicio/InfoServicio'
import Servicios from '@/components/Servicios/Servicios'

export default function Home() {
  return (
    <main className={styles.page}>
      <HomePage />
      <InfoServicio />
      <Servicios />
    </main>
  )
}
