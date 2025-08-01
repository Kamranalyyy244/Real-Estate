import React from 'react'
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <motion.div
    initial={{opacity: 0,x: 100}}
        transition={{duration:1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}} 
    className='container-fluid mx-auto pt-40 py-10 lg:px-32 w-full overflow-hidden' id='Testimonials' >
        <h1 className='text-3xl md:text-6xl font-bold mb-2 text-center' >Customer  <span className='underline underline-offset-4 decoration-1 under font-light'  >Testimonials</span></h1>
        <p className='text-center  text-gray-500 text-2xl max-w-120 mx-auto mt-3 mb-15' >Real Stories from Those Who Found Home with Us</p>
    
      <div className='flex flex-wrap justify-center gap-13' >
        {testimonialsData.map((testimonial,index)=>(
            <div key={index} className='max-w-[425px]  shadow-lg rounded px-14 py-17 items-center' >
                <img className='w-30 h-32  rounded-full mx-auto mb-4'  src={testimonial.image} alt={testimonial.alt} />
                <h1 className='text-[25px] text-center text-gray-700 font-semibold' >{testimonial.name}</h1>
                <p className='text-lg text-gray-500 text-center mb-6 ' >{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4 '>
                    {Array.from({length: testimonial.rating}, (item,index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                    ))}
                </div>
                <p className='text-gray-600 text-xl ' >{testimonial.text}</p>
            </div>
        ))}    
      </div>  
    
    
    </motion.div>


  )
}

export default Testimonial