import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "534085ef-9181-4b12-ae45-b115f351e71b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult(data.message);
    }
  };


  return (
    <motion.div
    initial={{opacity: 0,x: -200}}
        transition={{duration:1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}} 
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact' >
        <h1 className='text-3xl md:text-6xl font-bold mb-2 text-center' >Contact  <span className='underline underline-offset-4 decoration-1 under font-light'  >With Us</span></h1>
        <p className='text-center  text-gray-500 text-2xl max-w-120 mx-auto mt-3 mb-15' >Ready to Make a Move? Let’s Build Your Future Together</p>
    
        <form onSubmit={onSubmit} className='max-w-5xl  mx-auto text-gray-600 pt-10' >
            <div className='flex flex-wrap  ' >
                <div className='w-full md:w-1/2 text-2xl text-left' >Your Name
                <input className='w-full border border-gray-300 rounded-lg py-5 px-4 mt-2' type="text" placeholder='Your Name' name='Name' required />
                </div>
                <div className='w-full md:w-1/2 text-2xl text-left md:pl-7 ' >Your Email
                <input className='w-full border border-gray-300 rounded-lg py-5 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                </div>
            </div>
            <div className='my-6 text-left text-2xl mt-9 mb-15' >
                Message 
                <textarea className='w-full border border-gray-300 rounded-lg py-5 px-4 mt-3 h-70 resize-none'  name="Message" placeholder='Your Message' ></textarea>
            </div>
            <button className='bg-blue-600 text-white text-2xl py-4 px-15 mb-10 rounded-lg cursor-pointer ' >{result ? result : "Send Message"}</button>
        </form>
    
    
    
    </motion.div>
  )
}

export default Contact