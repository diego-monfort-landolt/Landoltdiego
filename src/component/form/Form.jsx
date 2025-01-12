import { useForm } from "react-hook-form";
import { useState } from 'react';
import './form.css';

const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formsubmit.co/3524c0a9bb0dcff5dc15f2e7e57dedb3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus('success');
        setIsSubmitted(true);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleOkClick = () => { 
    window.location.href = 'https://diego-monfort-landolt.github.io/Landoltdiego/'; 
    // Redirect to the base URL
    };

  return (
    <>
      <div className="formcontainer">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre:</label>
              <input type="text" name="name" placeholder="Nombre" required {...register('nombre', {
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
              <input type="text" name="company" placeholder="company" {...register('empresa', {
                required: true
              })} />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea type="text" name="message" placeholder="Tu texto..." required {...register('description', {
                required: true
              })} />
              {errors.description?.type === 'required' && <p className="errorpara">¿No quieres dejarme una nota?</p>}
            </div>
            <div>
              <label>Pais</label>
              <select {...register('pais')}>
                <option value='es'>Español</option>
                <option value='de'>Deutsch</option>
                <option value='en'>English</option>
              </select>
            </div>
            <input type="submit" value='Enviar' className="bn632-hover bn19" />
            <input type="hidden" name="_next" value='https://diego-monfort-landolt.github.io/Landoltdiego/'></input>
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_blacklist" value="vendo, telefono, link, amor, curso, formacion, dinero, http, https"></input>
          </form>
        ) : (
          <div className={`popup ${formStatus === 'success' ? 'success' : 'error'}`}>
            {formStatus === 'success' ? '¡El formulario se ha enviado con éxito! 🚀' : 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo. 🚀'}
            {formStatus === 'success' && <button onClick={handleOkClick} className="ok-button">Ok</button>}
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
