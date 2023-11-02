import React from 'react'
import Typed from 'react-typed'
function Projects() {
  return (
    <div className='text-white'>
        <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div>
            <Typed className='p-2 font-bold md:text-4xl sm:text-2xl'
                strings={['Soooooooon...']}
                typeSpeed={80}
                backSpeed={20}
                loop
            />
            <br />
            <Typed className='font-bold md:text-4xl sm:text-2xl'
                strings={['Projects','Game Projects','Animations', 'Small Project']}
                typeSpeed={80}
                backSpeed={20}
                loop
            />
            <br />
        </div>
        </div>
    </div>
  )
}

export default Projects