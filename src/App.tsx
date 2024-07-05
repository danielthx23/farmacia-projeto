import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
