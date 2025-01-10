import HomePage from '@/components/HomePage/HomePage'
import styles from './page.module.css'
import InfoServicio from '@/components/InfoServicio/InfoServicio'

export default function Home() {
  return (
    <main className={styles.page}>
      <HomePage />
      <InfoServicio />
    </main>
  )
}
