import React, { useRef, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'

const Contact = () => {
  
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9cao1ur",  // emailJS service id
      "template_ihxhsdj", // emailJS Template id
      form.current,
      "skn14jcZhwfvF1ayQ" // emailJS Public key
    )
    .then(
      () => {
        setIsSent(true);   // Reset form field after sending
        form.current.reset();
        toast.success("Message sent successfully! ✅",{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
      (error) => {
        toast.error("Error Sending Message.", error)
        toast.error("Failed to send message.Please Try Again.",{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    )
  }

  return (
    <section
    id='contact'
    className='flex flex-col items-center justify-center py-30 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >

      <ToastContainer />

      {/* section title */}

      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white
        '>CONTACT</h2>
        <div className='w-40 h-1 bg-cyan-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-5 text-lg font-semibold'>I'd love to hear from you-reach out for any opportunites or questions!</p>
      </div>

      {/* contact form */}
      <div className='mt-10 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>
          Connect With Me
        </h3>
        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input type="email" name="user_email" placeholder='Your Email' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-cyan-400'/>
          <input type="text" name="user_name" placeholder='Your Name' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-cyan-400'/>
          <input type="text" name="subject" placeholder='Subject' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-cyan-400'/>
          <textarea name="message" id="Message" rows="4" placeholder='Message'
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-cyan-400'></textarea>

          {/* send button */}
          <button type='submit'
          className='w-full bg-gradient-to-r from-cyan-400 to-purple-500 py-3 text-white font-semibold rounded-md hover:opacity-60 transition transform duration-300 hover:scale-105'
          >Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


