'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import styles from './FormContact.module.css'
import Spinner from '@/components/Spinner/Spinner'

const FormContact = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmith = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Obtener los datos del formulario
    const formData = Object.fromEntries(new FormData(e.target))

    // Crear el mensaje para el correo
    const message = `
      Nombre: ${formData.nombre}
      Correo: ${formData.email}
      Teléfono: ${formData.telefono}
      Fecha: ${formData.fecha}
      Servicio: ${formData.servicio}
      Consulta: ${formData.mensaje}
    `

    // Cuerpo de la solicitud
    const body = {
      from: `"${formData.nombre}" <${formData.email}>`, // Correo del remitente
      to: 'hernancarrazan33@gmail.com', // Cambiar al correo del destinatario
      subject: 'Nueva consulta desde la web',
      message,
    }

    try {
      // Realizar la solicitud POST
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const result = await response.json()
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Consulta enviada!',
          text: 'Hemos recibido tu consulta correctamente.',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          e.target.reset()
        })
      } else {
        console.error('Error al enviar el correo:', result.error)
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar la consulta',
          text: 'Ocurrió un problema al enviar tu consulta. Por favor, intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          e.target.reset()
        })
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error inesperado',
        text: 'Ocurrió un error en el sistema. Por favor, intenta más tarde.',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        e.target.reset()
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmith}>
      <h2>Reserva tu cita gratuita</h2>
      <div className={styles.container_inputs}>
        <input
          type='text'
          name='nombre'
          id='nombre'
          placeholder='Nombre completo'
          required
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Correo electrónico'
          required
        />
        <input
          type='number'
          name='telefono'
          id='telefono'
          placeholder='Teléfono'
          required
        />
        <input type='date' name='fecha' id='fecha' required />
        <select name='servicio' id='servicio' defaultValue='' required>
          <option value='' disabled>
            Seleccione un servicio
          </option>
          <option value='seguridad'>Cerrajería automotriz</option>
          <option value='seguridad'>Seguridad</option>
          <option value='cerrajeria'>Cerrajería</option>
          <option value='llaves'>Llaves</option>
          <option value='otros'>Otros</option>
        </select>

        <textarea
          required
          name='mensaje'
          id='mensaje'
          placeholder='Tu consulta aquí...'
        ></textarea>
        <button type='submit'>
          {!isLoading ? <Spinner /> : 'Enviar consulta'}
        </button>
      </div>
    </form>
  )
}

export default FormContact
