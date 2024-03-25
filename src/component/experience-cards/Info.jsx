import './review.css'
import { AiOutlineClose } from "react-icons/ai";
import PropTypes  from 'prop-types'
import { useState, useEffect } from 'react';

const Info = ({ children, estado, cambiarEstado }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  return (
    <>
      { estado &&
        <div className='overlay modal-open'>
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

Info.propTypes = {
  children: PropTypes.string.isRequired,
  estado: PropTypes.bool,
  cambiarEstado: PropTypes.bool//
}
export default Info