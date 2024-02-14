import { useForm } from "react-hook-form"


const Form = () => {
  const { register, handleSubmit } =useForm();
  return (
    <>
    <h2>Form</h2>
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text" name='' />
      </div>
      <div>
        <label>Empresa:</label>
        <input type="text" name='' />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea type="text" />
      </div>
      <div>
        <label>Pais</label>
        <select>
          <option value='es'>Español</option>
          <option value='de'>Deutsch</option>
          <option value='en'>English</option>
        </select>
      </div>


    </form>
    </>
   
  )
}

export default Form