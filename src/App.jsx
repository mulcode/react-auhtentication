
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
