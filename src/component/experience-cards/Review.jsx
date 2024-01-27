
import './review.css'
import PropTypes  from 'prop-types'
import { AiOutlineClose  } from "react-icons/ai";

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
        <button className='review-btn'>Más info</button>
        {/* text area from info - when click this */}

        <div className='overlay'>
              <div className='cont-model'>
                <div className='model-head'>
                  <h3 className='info-txt'>{info}</h3>
                </div>
                <button className='close-btn'><AiOutlineClose size={20} /></button> 
              </div>
            </div>
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