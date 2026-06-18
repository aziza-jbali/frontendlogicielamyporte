import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Login from './pages/Login.jsx';
import Header from './components/Header.jsx'
import Invoices from './pages/Invoices.jsx';
import MainDashboard from './pages/MainDashboard.jsx';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> 
    <Routes>
      <Route path="/login" element={<Login/>}/>
            <Route path="/invoices" element={<Invoices/>}/>

    </Routes>  */}
    <MainDashboard/>
    

    </>
  )
}

export default App


