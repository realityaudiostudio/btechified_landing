import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import PricingPage from './pages/LandingPage/PricingPage'
function App() {

  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    </Routes>
    </Router>
    {/* <Home/> */}
    </>
  )
}

export default App
