import { Route, Routes } from 'react-router-dom'
import './App.css'
import  Navbar  from './component/Navbar'
import  About  from './pages/About'
import  Contact  from './pages/Contact'
import  Home  from './pages/Home'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    let currentPath = location.pathname;
    // Check if the currentPath starts with '/' and remove it
    if (currentPath.startsWith('Landoltdiego-Home')) {
      currentPath = currentPath.substring(1);
    }
    currentPath = currentPath.replace(/\//g, '');
    document.title = `Frontend Developer | ${ currentPath}`;  
  }, [location]);

  return (
    <>
      <div>
        <Navbar />    
      </div>
        <Routes>
          <Route basename="Landoltdiego-Home" element={<Home />} />
          <Route path="Landoltdiego-Home" element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='/*' element={<Home />} />  
        </Routes> 
    </>
  )
}
export default App