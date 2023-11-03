import React from 'react'
import Typed from 'react-typed'
function Projects() {
  return (
    <div id='projects' className='text-white'>
        <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div>
            <Typed className='font-bold text-5xl md:text-4xl sm:text-2xl'
                strings={['Projects']}
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
            
            {/* <button className='bg-[#fbf24d] text-[#000000] w-[200px] rounded-md font-bold text-2xl my-6 mx-auto py-3'>Hire Me!</button> */}
        </div>
        </div>
    </div>
  )
}

export default Projects