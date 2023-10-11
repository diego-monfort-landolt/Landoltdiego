
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import { About, Contact, Services, Home } from './pages/'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
