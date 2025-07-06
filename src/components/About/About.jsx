import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/myphoto1.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hriday Saikia
          </h2>
          {/* Skills heaing with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-cyan-400 leading-tight'>
            <span className='text-white'>I am a </span>
            {/* <ReactTypingEffect
            text={[
              'Coder',
              'Web Developer',
              'UI/UX Designer',
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer = {(cursor) => (
              <span className='text-cyan-400'>{cursor}</span>
              )}
          />  */}
            <Typewriter
              words={['Coder', 'Web Developer', 'UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />

          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-18 leading-relaxed">
            I'm a passionate web developer and coder with a strong interest in electronics projects. I love building responsive websites, solving problems through code, and experimenting with innovative tech-driven solutions that blend software and hardware.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1XLflP4rbH_Rf1cJEBpPCNNfctCRPoszd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 "
            style={{
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(45, 212, 191, 0.1)',
              border: '1px solid #00BFFF',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '1rem',
              fontWeight: '500',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-cyan-400 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Hridayananda Saikia"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>

    </section>
  )
}

export default About


