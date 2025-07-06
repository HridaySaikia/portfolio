import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram} from 'React-icons/fa';

const Footer = () => {
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-cyan-400'>
          Hridayananda Saikia
        </h2>

        {/* social media icons */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon: <FaInstagram />, link:"https://www.instagram.com/hriday__saikia/"},
            {icon: <FaLinkedin />, link:"https://www.linkedin.com/in/hriday-saikia-54764028a/"},
            {icon: <FaTwitter />, link:"https://x.com/HSaikia38499"},
          ].map((item, index) => (
            <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:text-cyan-400 transition-transform transform hover:scale-120'
            >{item.icon}</a>
          ))}
        </div>
        
        {/* copyright text */}
        <p className='text-sm text-gray-400 mt-6'>
          © 2025 Hridayananda Saikia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
