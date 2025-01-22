import HomePage from '@/components/HomePage/HomePage'
import styles from './page.module.css'
import InfoServicio from '@/components/InfoServicio/InfoServicio'
import Servicios from '@/components/Servicios/Servicios'
import SobreNosotros from '@/components/SobreNosotros/SobreNosotros'
import { images } from '@/utils/Imagenes'
import { imagesAutos } from '@/utils/ImagenesAuto'
import Contacto from '@/components/Contacto/Contacto'
import Footer from '@/components/footer/Footer'
import MarcasAutos from '@/components/MarcasAutos/MarcasAutos'
import MarcasCerraduras from '@/components/MarcasCerraduras/MarcasCerraduras'

export default function Home() {
  return (
    <main className={styles.page}>
      <HomePage />
      <InfoServicio />
      <MarcasAutos
        marcas={imagesAutos}
        direction='right'
        text={'Servicios de cerrajeria automotriz en distintas marcas'}
      />
      <Servicios />
      <MarcasCerraduras
        marcas={images}
        direction='left'
        text={'Servicios de cerrajeria en distintas marcas'}
      />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </main>
  )
}
