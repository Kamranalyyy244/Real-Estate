import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Project = () => {

  const [currentIndex,SetCurrentIndex] = useState(0);
  const [cardsToShow,SetCardsToShow] = useState(1);

  useEffect(()=>{
    const updateCardsToShow = ()=>{
      if(window.innerWidth >= 1024 ){
        SetCardsToShow(projectsData.length)
      }else if (window.innerWidth >= 640) {
        SetCardsToShow(2); // Tablet: 2 cards
      }
      else{
        SetCardsToShow(1)
      };
    }
      updateCardsToShow();

      window.addEventListener('resize', updateCardsToShow);
      return()=> window.removeEventListener('resize', updateCardsToShow);
      

  },[])


  const nextProject =() =>{
    SetCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  } 
  const prevProject =() =>{
    SetCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  } 


  return (
    <motion.div 
    initial={{opacity: 0,x: -200}}
        transition={{duration:1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}} 
    className='container-fluide mx-auto
     p-4 pt-40 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects' >
        <h1   className='text-3xl md:text-6xl font-bold mb-2 text-center' >Projects  <span className='underline underline-offset-4 decoration-1 under font-light'  >Completed</span></h1>
        <p className='text-center  text-gray-500 text-2xl max-w-xl mx-auto mt-3 mb-8' >Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

    {/* ------slider-button-- */}
      <div className='flex justify-end items-center mb-15 mt-15 ' >
        <button onClick={prevProject}  className='p-5 cursor-pointer bg-gray-200 rounded mr-2' aria-label='Previous Project' >
          <img src={assets.left_arrow} className='w-3' alt="Previous" />
        </button>
        <button onClick={nextProject} className='p-5 cursor-pointer  bg-gray-200 rounded mr-2' aria-label='Next Project' >
          <img src={assets.right_arrow} className='w-3' alt="Next" />
        </button>
      </div>

      {/* Slider Container */}

      <div className='overflow-hidden' >
        <div className='flex transition-transform duration-500 ease-in-out ' 
        style={{width: `${(projectsData.length * 100) / cardsToShow}%`, transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {projectsData.map((project , index)=>(
              <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4 ml-10'>
                <img src={project.image} className='w-95 h-auto mb-14 ' alt={project.title} />
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12  '>
                <div className='bg-white px-4 py-3 shadow-md rounded'>
                  <h1 className='text-3xl font-semibold text-gray-800'>
                    {project.title}
                  </h1>
                  <p className='text-xl text-gray-500 '>
                    {project.price} <span className='px-1' >|</span> {project.location}
                  </p>
                </div>
              </div>
              </div>
            ))}
        </div>
      </div>

    </motion.div>
  )
}

export default Project