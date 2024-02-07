import './review.css'
import { AiOutlineClose } from "react-icons/ai";


const Info = ({ children, estado, cambiarEstado }) => {
  return (
    <>
      { estado &&
        <div className='overlay'>
          <div className='cont-model'>
            <div className='model-head'>
              <h3 className='info-txt'>🚩</h3>
            </div>
            <button className='close-btn' onClick={() => cambiarEstado(false)} ><AiOutlineClose size={20} /></button>
            {children}
          </div>
        </div>
      }
    </>
  )
}
export default Info