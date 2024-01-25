import './review.css'
import { AiOutlineClose  } from "react-icons/ai";


const Info = () => {
  return (
    <>
    <div className='overlay'>
      <div className='cont-model'>
        <div className='model-head'>
          <h3 className='info-txt'>Popup</h3>
        </div>
         <button className='close-btn'><AiOutlineClose size={20} /></button> 
      </div>
    </div>
    
    </>
  )
}

export default Info