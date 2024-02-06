
import Info from './Info'
import './review.css'
import PropTypes  from 'prop-types'

const info = [
  {
    id: 1,
    info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
  },
  {
    id: 2,
    info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
  },
  {
    id: 3,
    info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
  },
  {
    id: 4,
    info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
  }, 
  {
    id: 5,
    info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
  },
  {
    id: 6,
    info: 'Me enamoro de react, un lenguage tan precioso que me facina cada dia mas y mas'
  },
]

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
        <button className='review-btn' onClick={() => {alert('will be activated in the next update')}}>Más info</button>
        {/* text area from info - when click this */}
        <Info />
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