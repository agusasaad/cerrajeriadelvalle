import cerradura from '@/assets/images/card_image/cerradura.png'
import candado from '@/assets/images/card_image/candado.png'
import llave_auto from '@/assets/images/card_image/llave_auto.png'
export const servicios = [
  {
    titulo: 'Servicios Generales de Cerrajería',
    descripcion:
      'Soluciones completas para hogares, negocios e industrias, reparaciones de cerraduras, etc.',
    detalles: [
      {
        nombre: 'Aperturas',
        descripcion:
          'Servicio rápido y profesional en cualquier tipo de espacio.',
      },
      {
        nombre: 'Cerraduras',
        descripcion: 'Venta, instalación y reemplazo para mayor seguridad.',
      },
      {
        nombre: 'Llaves',
        descripcion:
          'Duplicados, combinaciones y codificaciones personalizadas.',
      },
      {
        nombre: 'Cilindros',
        descripcion: 'Codificación y venta de cilindros de alta calidad.',
      },
    ],
    image: cerradura,
  },
  {
    titulo: 'Soluciones de Seguridad y Acceso',
    descripcion:
      'Herramientas modernas para controlar y proteger tus espacios con confianza.',
    detalles: [
      {
        nombre: 'Micro llaveros y controles de acceso',
        descripcion: 'Programación de dispositivos inteligentes.',
      },
      {
        nombre: 'Cajas fuertes y candados',
        descripcion: 'Aperturas, reseteo y soluciones seguras.',
      },
      {
        nombre: 'Candados de seguridad',
        descripcion: 'Opciones reforzadas para diferentes necesidades.',
      },
      {
        nombre: 'Cierra puertas',
        descripcion: 'Instalación y mantenimiento para comodidad y seguridad.',
      },
      // {
      //   nombre: 'Manijones y picaportes',
      //   descripcion: 'Diseño y funcionalidad en cada instalación.',
      // },
    ],
    image: candado,
  },
  {
    titulo: 'Cerrajería Automotriz',
    descripcion:
      'Servicios especializados para todo tipo de vehículos, con tecnología avanzada.',
    detalles: [
      {
        nombre: 'Telemandos y carcazas',
        descripcion: 'Programación y reparación de dispositivos electrónicos.',
      },
      {
        nombre: 'Aperturas de vehículos',
        descripcion: 'Soluciones rápidas sin daños.',
      },
      // {
      //   nombre: 'Duplicados y codificaciones de llaves',
      //   descripcion: 'Llaves nuevas o copias con alta precisión.',
      // },
      {
        nombre: 'Cambios de cilindros y pilas',
        descripcion: 'Reparación de sistemas clave en tu auto.',
      },
      {
        nombre: 'Lectura de pincode',
        descripcion: 'Configuración avanzada para controles y llaves.',
      },
    ],
    image: llave_auto,
  },
]
