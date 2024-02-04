import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import { About, Contact, Home } from './pages/'
import Typewriter from 'typewriter-effect'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <div>  
        <Navbar />
      </div>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/home"  element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

      <h2 className='First-Titel'><Typewriter
              options={{
                strings: ['Bienvenido 👋 ', 'Welcome to my Portfolio', 'Herzlich Wilkommen', '{ I m DiegoDev }'],
                autoStart: true,
                loop: true,
              }}
            /></h2>
            <p className='text-app'>
            Herzlich Willkommen! Wir freuen uns sehr, Sie hier zu begrüßen. Obwohl wir eine kleine Gemeinschaft sind, haben wir ein großes Herz und freuen uns darauf, Sie kennenzulernen. Genießen Sie Ihren Aufenthalt!
            </p>
            <div className='icons-app'>

               <a href='https://github.com/diego-monfort-landolt'>
              <AiFillGithub color='red' size='40px' />
            </a>
            <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
              <AiFillLinkedin size='40px' color='red' />
            </a>
            </div>
              
    </>
  )
}

export default App
