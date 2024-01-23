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
    description: 'JavaScript ha capturado mi atención y ha transformado mi enfoque hacia el desarrollo web.',
    image: Bild3
  },
  {
    id: 4,
    title: 'Node.Js',
    description: 'Node.js ha capturado mi atención y ha transformado mi enfoque hacia el desarrollo web.',
    image: Bild4
  },
  {
    id: 5,
    title: 'React',
    description: 'React.js es una biblioteca de JavaScript que ha capturado mi atención y ha transformado mi enfoque hacia el desarrollo web.',
    image: Bild5
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
              />
            </div>  
          ))
        }
      </div>
    </>
  )
}

export default Reviews