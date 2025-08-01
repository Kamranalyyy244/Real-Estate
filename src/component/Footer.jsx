import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-8 px-4 md:px-32 bg-gray-900 w-full  overflow-hidden' id='Footer' >
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center' >
        <div className='w-full md:w-1/3 mb-8 md:mb-0' >
          <img src={assets.logo_dark} className='md:w-50' alt="" />
          <p className='text-gray-400  mt-9 md:text-2xl' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className='w-full md:w-1/5  md:mb-0' >
          <h1 className='text-white text-2xl  font-bold mb-6 pt-10 md:text-3xl' >Company</h1>
          <ul className='flex flex-col gap-3 text-xl mb-4 text-gray-400 md:text-2xl ' >
            <a href='#Header' className='hover:text-white ' >Home</a>
            <a href='#About' className=' hover:text-white' >About</a>
            <a href='#Projects' className=' hove:text-whiter' >Projects</a>
            <a href='#Testimonials' className=' hover:text-white' >Testimonials</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3 ' >
            <h1 className='text-white text-3xl  font-bold mb-6 pt-3 md:text-4xl' >Subscribe to our newsletter</h1>
            <p className='text-gray-400 mb-8 max-w-120 md:xl ' > The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='flex gap-3' >
              <input type="email" placeholder='Enter Your Email' className='p-2 rounded-lg bg-gray-800 text-gray-400 border
               border-gray-700   focus:outline-none w-full  md:w-auto px-4 py-3 ' />
               <button className='rounded-lg bg-blue-500 text-white md:py-3 px-6 ' >Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-15 text-center text-gray-500 text-lg md:text-2xl '>
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer