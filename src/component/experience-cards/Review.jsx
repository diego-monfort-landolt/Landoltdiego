import Info from './Info'
import './review.css'
import PropTypes  from 'prop-types'

const Review = ({ title, text, image }) => {
  return (
    <>
    <div className="review">
      <img src={ image } className='review-img' />
      <div className="review-body">
        <h4 className="review-title">{ title }</h4>
        <p className="review-text">{ text }</p>
      </div>
      <div className='container-btn'>
        <button className='review-btn'>Más info</button>
        <Info />
      </div>
    </div>
    </>
  )
}
Review.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string
}

export default Review