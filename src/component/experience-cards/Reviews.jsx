import Review from "./Review"
import Bild1 from '../../images/html.png'
import Bild2 from '../../images/css.png'
import Bild3 from '../../images/js.png'
import Bild4 from '../../images/node.png'
import Bild5 from '../../images/atom.png'

const reviews = [
  {
    id: 1,
    title: 'Html',
    description: 'La base de todo',
    image: Bild1,
    info: 'El fundamento esencial de la programación web radica en HTML'
  },
  {
    id: 2,
    title: 'CSS',
    description: 'Styles, Styles y mas Styles',
    image: Bild2,
    info: 'La personalización de estilos se realiza mediante CSS.💅'
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Mi experiencia en JavaScript y porque me gusta',
    image: Bild3,
    info: '❤️ JavaScript es un lenguaje que permite realizar auténticos prodigios en la programación ❤️'
  },
  {
    id: 4,
    title: 'Node.Js',
    description: 'Mi experiencia en Node.js y porque me gusta',
    image: Bild4,
    info: 'Node.js, que se fundamenta en JavaScript, resulta fácil de manejar para aquellos que ya tienen conocimientos de JS y ofrece la ventaja de facilitar la gestión simultánea de peticiones'
  },
  {
    id: 5,
    title: 'React',
    description: 'Mi experiencia en React y porque me gusta',
    image: Bild5,
    info: '❤️ Desde el momento en que descubrí React, supe que había encontrado algo especial. Su simplicidad, su elegancia y su potencia me cautivaron. Con cada componente que creaba, cada estado que gestionaba, cada efecto que implementaba, mi admiración por React crecía. ❤️'
  }
]

const Reviews = () => {
  return (
    <>
      <div className="review-container" >
        {
          reviews.map(reviews => (
            <div key={reviews.id}>
              <Review
                title={reviews.title}
                text={reviews.description}
                image={reviews.image}
                info={reviews.info}
              />

            </div>
          ))
        }
      </div>
    </>
  )
}
export default Reviews