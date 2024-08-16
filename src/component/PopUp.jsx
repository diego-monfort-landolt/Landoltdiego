import { useEffect, useState } from 'react';
import './popup.css'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('first-time')) {
      setShowPopup(true);
      localStorage.setItem('first-time', 1)
    }
  }, [])
  return (
    <>
      { showPopup && (
        <div className="popup">
          <div className="popup-content"> 
            <h2>Bienvenido a mi Portafolio 🖐️</h2>
            <p>disfruta y dale al ✖️</p>
            <button className="close" onClick={() => {setShowPopup(false)}}>❌</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Popup