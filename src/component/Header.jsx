import React from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className=' min-h-screen mb-4 bg-cover bg-center flex items-center
     w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header' >
        <NavBar/>
        <motion.div
        initial={{opacity: 0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity: 1,y:0}}
        viewport={{once: true}}
        className=' container  text-center mx-auto py-4 px-6 md:px-20 lg:px-32
         text-white  '>
            <h1 className='text-4xl  sm:text-6xl md:text-[122px] inline-block max-w-6xl font-semibold  pt-25' >Explore homes that fit your dreams</h1>
            <div className=' space-x-6 pt-25  text-xl' >
                <a href="#Projects" className=' border border-white  px-13 py-5 rounded ' >Projects</a>
                <a href="#Contact" className=' bg-blue-500 px-12 py-5  rounded ' >Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header