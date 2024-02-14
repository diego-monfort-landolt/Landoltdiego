import { useForm } from "react-hook-form"
import './form.css'


const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2>Form</h2>
      <div className="formcontainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nombre:</label>
            <input type="text" {...register('nombre', {
              required: true,
              maxLength: 25
            })} />
            {errors.nombre?.type === 'required' && <p>Dime tu nombre</p>}
            {errors.nombre?.type === 'maxLength' && <p>Tu nombre no puede superar los 25 caracteres</p>}
          </div>
          <div>
            <label>E-Mail:</label>
            <input type="email" {...register('email')} />
            {errors.email?.type === 'pattern' && <p>El formato del e-mail está incorrecto</p>}
          </div>
          <div>
            <label>Empresa:</label>
            <input type="text" {...register('empresa', {
              required: true
            })} />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea type="text" />
          </div>
          <div>
            <label>Pais</label>
            <select {...register('pais')}>
              <option value='es'>Español</option>
              <option value='de'>Deutsch</option>
              <option value='en'>English</option>
            </select>
          </div>
          <input type="submit" value='Enviar' />
        </form>
      </div>
    </>

  )
}

export default Form