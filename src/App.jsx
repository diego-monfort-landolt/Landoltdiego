import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import { About, Contact, Home } from './pages/'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    document.title = `DiegoDev - ${currentPath}`;
  }, [location]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='*' element={<Home />} />  
      </Routes>
    </>
  )
}

export default App
