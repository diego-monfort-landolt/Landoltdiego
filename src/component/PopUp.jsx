import { useState } from 'react';
import './popup.css'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
    
    
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content"> 
            <h2>Bienvenido a mi sitio web</h2>
            <p>¡Gracias por visitar mi sitio web!</p>
            <button className="close" onClick={handleClose}>❌</button>
          </div>
        </div>
        
      )}
    </>
  );}
  export default Popup