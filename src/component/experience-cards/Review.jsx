
import Info from './Info'
import './review.css'
import PropTypes  from 'prop-types'

const Review = ({ title, text, image, info }) => {
  return (
    <>
    <div className="review">
      <img src={ image } className='review-img' />
      <div className="review-body">
        <h4 className="review-title">{ title }</h4>
        <p className="review-text">{ text }</p>
      </div>
      <div className='container-btn'>    
        <button className='review-btn' onClick={() => {alert('will be activated in the next update')}}>Más info</button>


        {/* todoo: -- aded the modal popup -text area from info - when click this */}
        <Info info={ info} />
      </div>
    </div>
    </>
  )
}

Review.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string,
  info: PropTypes.string
}

export default Review