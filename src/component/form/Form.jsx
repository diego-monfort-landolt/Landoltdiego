import { useForm } from "react-hook-form";
import './form.css';

const Form = () => {
  const { register, formState: { errors } } = useForm();

  return (
    <div className="formcontainer">
      <form
        action="https://formsubmit.co/diegomonfort1989@gmail.com"
        method="POST"
      >
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" placeholder="Nombre" required {...register('nombre', {
            required: true,
            maxLength: 25
          })} />
          {errors.nombre?.type === 'required' && <p className="errorpara">Dime tu nombre</p>}
          {errors.nombre?.type === 'maxLength' && <p className="errorpara">Tu nombre no puede superar los 25 caracteres</p>}
        </div>

        <div>
          <label>E-Mail:</label>
          <input type="email" name="email" placeholder="E-Mail" required {...register('email')} />
          {errors.email?.type === 'pattern' && <p className="errorpara">El formato del e-mail está incorrecto</p>}
        </div>

        <div>
          <label>Empresa:</label>
          <input type="text" name="empresa" placeholder="Empresa" {...register('empresa', { required: true })} />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea name="description" placeholder="Tu texto..." required {...register('description', {
            required: true
          })} />
          {errors.description?.type === 'required' && <p className="errorpara">¿No quieres dejarme una nota?</p>}
        </div>

        <div>
          <label>País:</label>
          <select name="pais" {...register('pais')}>
            <option value='es'>Español</option>
            <option value='de'>Deutsch</option>
            <option value='en'>English</option>
          </select>
        </div>

        {/* 🔒 Sicherheitsoptionen */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_blacklist" value="vendo, telefono, link, amor, curso, formacion, dinero, http, https" />
        <input type="hidden" name="_next" value="https://diego-monfort-landolt.github.io/Landoltdiego/" />

        <input type="submit" value="Enviar" className="bn632-hover bn19" />
      </form>
    </div>
  );
};

export default Form;
