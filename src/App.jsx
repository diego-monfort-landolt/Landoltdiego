import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import { About, Contact, Home } from './pages/'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />  
      </Routes>
    </>
  )
}

export default App
