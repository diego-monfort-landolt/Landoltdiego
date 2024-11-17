import './footer.css'
import { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return ( 
    <> 
    <div className='footer'>  
      <div className={`appear-animation ${isVisible ? 'visible' : ''}`}>
        <p><a href='https://github.com/diego-monfort-landolt'>
              <AiFillGithub color='red' size='30px' />
            </a>  <code>React - Vite - JS</code> 
            <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
                <AiFillLinkedin size='30px' color='red' />
            </a>
        </p>
      </div>
    </div>
    </>
  )
}
export default Footer