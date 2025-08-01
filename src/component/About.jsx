import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
        initial={{opacity: 0,x:200}}
        transition={{duration:1}}
        whileInView={{opacity: 1,x:0}}
        viewport={{once: true}} 
        className='flex container-fluid flex-col items-center justify-center ml-0 mx-auto
        p-15  md:px-20 lg:px-32 w-full overflow-hidden' id='About' >
        <h1 className='text-2xl md:text-6xl font-bold mb-2 text-center' >About <span className='underline underline-offset-4 decoration-1 under font-light' >Our Brand</span> </h1>
        <p className='text-gray-500 text-2xl max-w-120 mt-1 text-center mb-8' >Passionate About Properties, Dedicated to Your Vision</p>
        <div className='flex  flex-col md:flex-row items-center md:items-start md:gap-20' >
            <img src={assets.brand_img} alt="" className='w-500  rounded-lg sm:w-1/2 ' />
          <div className='flex flex-col items-center  md:items-start mt-10 text-gray-600 ml-4' >
              <div className=' grid grid-cols-2 text-xl  mt-7 gap-25 md:gap-35 w-full 2xl mr-7 ' >
                  <div >
                    <p className=' text-5xl font-medium text-gray-800 md:text-6xl ' >10+</p>
                    <p className='pt-2' >Years of Excellence</p>
                  </div>
                  <div>
                    <p className=' text-5xl font-medium text-gray-800 ' >12+</p>
                    <p className='pt-2'>Project Completed</p>
                  </div>
                  <div>
                    <p className=' text-5xl font-medium text-gray-800 ' >20+</p>
                    <p className='pt-2'>Mn. Sq. Ft. Delivered</p>
                  </div>
                  <div>
                    <p className=' text-5xl font-medium text-gray-800 ' >25+</p>
                    <p className='pt-2'>Ongoing Projects</p>
                  </div>
              </div>
              <p className='my-15 max-w-155 text-xl md:text-2xl ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button href="#" className=' bg-blue-600  px-8 py-2 text-white text-xl  rounded-lg md:text-2xl' >Learn More</button>

          </div>
        </div>
    </motion.div>
  )
}

export default About