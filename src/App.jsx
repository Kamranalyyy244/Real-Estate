import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden ' >
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App