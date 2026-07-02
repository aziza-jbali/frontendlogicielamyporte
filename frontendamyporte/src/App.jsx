import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Login from './pages/Login.jsx';
import Header from './components/Header.jsx'
import Clientstep from "./components/Clientstep.jsx"
import Invoicestep from './components/Invoicestep.jsx';
import Invoices from './pages/Invoices.jsx';
import MainDashboard from './pages/MainDashboard.jsx';
import Popup from './components/Popup1.jsx';
import WizardLayout from './Layout/WizardLayout.jsx';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   {/* <Header/> 
    <Routes>
      <Route path="/login" element={<Login/>}/>
            <Route path="/invoices" element={<Invoices/>}/>

    </Routes>  */}
    {/* <MainDashboard/> */}
    {/* <Clientstep/> */}
     {/* <Invoicestep/>  */}
    {/* <Popup/> */}
    <WizardLayout/>

    </>
  )
}

export default App


