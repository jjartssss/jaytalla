import React from 'react'
import Helmet from '../assets/Astronaut Helmet - 2250x2250.png'
import Typed from 'react-typed'

const About = () => {
  return (
    <div id='about' className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
            <img className='w-[500px] mx-auto my-4' src={Helmet} alt="/" />
            <div className='flex flex-col justify-center'>
                <h2 className='sm:text-2xl font-bold text-3xl py-2 '>Hello Testing Chuchu</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className='bg-[#fbf24d] text-[#000000] w-[200px] rounded-md font-bold text-2xl my-6 md:mx-0 py-3'>Hire Me!</button>
            </div>
        </div>
    </div>
  )
}

export default About