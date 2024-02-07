import { useState } from 'react'

import Info from './Info'
import './review.css'
import PropTypes  from 'prop-types'

const Review = ({ title, text, image, info }) => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false)

  return (
    <>
    <div className="review">
      <img src={ image } className='review-img' />
      <div className="review-body">
        <h4 className="review-title">{ title }</h4>
        <p className="review-text">{ text }</p>
      </div>
      <div className='container-btn'>    
        <button className='review-btn' onClick={() => cambiarEstadoModal1(!estadoModal1) }>Más info</button>


        {/* todoo: -- aded the modal popup -text area from info - when click this */}
        <Info 
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        >
          <div className='contenido'>
           <h2>{ title }</h2>
          <p>{ info }</p> 
          </div>
          
        </Info>
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