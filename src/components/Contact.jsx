import React from 'react'
import Typed from 'react-typed'

const Contact = () => {
  return (
    <div id='contact' className='text-white'>
        <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div>
        <Typed className='font-bold text-5xl md:text-4xl sm:text-2xl'
                strings={['Contact']}
                typeSpeed={80}
                backSpeed={20}
                loop
            />
            <br />

            <Typed className='font-bold md:text-4xl sm:text-2xl'
                strings={['Coming soon...']}
                typeSpeed={80}
                backSpeed={20}
                loop
            />
        </div>
        </div>
    </div>
  )
}

export default Contact