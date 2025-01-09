import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.cerrajeria-del-valle.com/'),
  title: 'Cerrajería del Valle - Soluciones de Cerrajería en CABA',
  description:
    'En Cerrajería del Valle ofrecemos servicios profesionales de cerrajería en CABA. Contamos con más de 15 años de experiencia atendiendo urgencias 24/7 y brindando soluciones para hogares, empresas y vehículos.',
  keywords:
    'Cerrajería del Valle, cerrajería en CABA, servicios de cerrajería, urgencias 24 horas, apertura de puertas, cambio de cerraduras, duplicado de llaves, reparación de puertas, cerrajería automotriz, seguridad para el hogar, soluciones de cerrajería, cerrajero en CABA, servicios de emergencia, cerraduras y llaves, instalación de cerraduras',
  author: 'Cerrajería del Valle',
  openGraph: {
    title: 'Cerrajería del Valle - Soluciones de Cerrajería en CABA',
    description:
      'Más de 15 años brindando servicios de cerrajería confiables y profesionales en CABA. Urgencias 24/7 para hogares, empresas y vehículos.',
    images: 'https://www.cerrajeria-del-valle.com/image.jpg',
    url: 'https://www.cerrajeria-del-valle.com/',
    type: 'website',
    site_name: 'Cerrajería del Valle',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cerrajería del Valle - Servicios de Cerrajería en CABA',
    description:
      'Servicios profesionales de cerrajería en CABA. Urgencias 24 horas, apertura de puertas, cambios de cerraduras, y más.',
    images: 'https://www.cerrajeria-del-valle.com/image.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
