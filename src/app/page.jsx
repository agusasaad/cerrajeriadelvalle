import HomePage from '@/components/HomePage/HomePage'
import styles from './page.module.css'
import Marcas from '@/components/Marcas/Marcas'

export default function Home() {
  return (
    <main className={styles.page}>
      <HomePage />
      <Marcas />
    </main>
  )
}
