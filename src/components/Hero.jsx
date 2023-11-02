import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p>Hello</p>
        <h1 className='md:py-4 font-bold p-2 md:text-7xl text-5xl text-[#fbf24d]'>I'm Jay Talla</h1>
        <div>
            <Typed className='font-bold md:text-4xl sm:text-2xl'
                strings={['Web Developer','Game Developer','Animator']}
                typeSpeed={80}
                backSpeed={20}
                loop
            />
            <br />
            <button className='bg-[#fbf24d] text-[#000000] w-[200px] rounded-md font-bold text-2xl my-6 mx-auto py-3'>Hire Me!</button>
        </div>
        </div>
    </div>
  )
}

export default Hero