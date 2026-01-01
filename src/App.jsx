import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import PricingPage from './pages/LandingPage/PricingPage'
import InsideThis from './pages/LandingPage/InsideThis'
import Colleges from './pages/LandingPage/Colleges'
import Contact from './pages/LandingPage/Contact'
function App() {

  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/inside' element={<InsideThis/>}/>
    <Route path='/colleges' element={<Colleges/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    {/* <Home/> */}
    </>
  )
}

export default App
