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
    image: Bild1
  },
  {
    id: 2,
    title: 'CSS',
    description: 'Styles, Styles y mas Styles',
    image: Bild2
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Mi experiencia en JavaScript y porque me gusta',
    image: Bild3
  },
  {
    id: 4,
    title: 'Node.Js',
    description: 'Mi experiencia en Node.js y porque me gusta',
    image: Bild4
  },
  {
    id: 5,
    title: 'React',
    description: 'Mi experiencia en React y porque me gusta',
    image: Bild5,
    info: 'this is my favorite language'
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