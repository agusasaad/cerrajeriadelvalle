import styles from './FormContact.module.css'

const FormContact = () => {
  return (
    <form className={styles.form}>
      <h2>Reserva tu cita gratuita</h2>
      <div className={styles.container_inputs}>
        <input
          type='text'
          name='nombre'
          id='nombre'
          placeholder='Nombre y completo'
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Correo electrónico'
        />
        <input
          type='number'
          name='telefono'
          id='telefono'
          placeholder='Telefono'
        />
        <input type='date' name='fecha' id='fecha' />
        <select name='servicio' id='servicio' defaultValue=''>
          <option value='' disabled>
            Seleccione un servicio
          </option>
          <option value='seguridad'>Cerrajeria automotriz</option>
          <option value='seguridad'>Seguridad</option>
          <option value='cerrajeria'>Cerrajería</option>
          <option value='llaves'>Llaves</option>
          <option value='otros'>Otros</option>
        </select>

        <textarea
          name='mensaje'
          id='mensaje'
          placeholder='Tu consulta aqui...'
        ></textarea>
        <button type='submit'>Enviar consulta</button>
      </div>
    </form>
  )
}

export default FormContact
