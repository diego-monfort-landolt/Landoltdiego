import './footer.css'
import { useState, useEffect } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  return ( 
    <>
    
    <div className='footer'>  
      <div className={`appear-animation ${isVisible ? 'visible' : ''}`}>
      <p>DiegoDev | React - Vite - JS | 2023 España</p>
    </div>
    </div>
    </>
  )
}

export default Footer