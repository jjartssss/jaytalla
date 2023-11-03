import React from 'react'
import Typed from 'react-typed'
function Projects() {
  return (
    <div id='projects' className='text-white'>
        <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div>
            <Typed className='align-baseline font-bold text-5xl md:text-4xl sm:text-2xl'
                strings={['Projects']}
                typeSpeed={80}
                backSpeed={20}
                
            />
            <br />

            {/* <Typed className='font-bold md:text-4xl sm:text-2xl'
                strings={['Coming soon...']}
                typeSpeed={80}
                backSpeed={20}
                loop
            /> */}

            <ul className='justify-center flex py-4'>
              <li className='p-4'>Games</li>
              <li className='p-4'>UIUX - AdobeXD</li>
              <li className='p-4'>Small Apps</li>
              <li className='p-4'>Flutter</li>
            </ul>

            <div className='md:w-[50%] p-5 w-[80%] h-[100%] md:h-[50%] bg-white flex items-center justify-items-center mx-auto md:grid-cols-4 gap-4 grid content-evenly text-black'>
              <div className='container bg-red-400 p-4 md:m-3'>a</div>
              <div className='container bg-red-400 p-4 md:m-3'>b</div>
              <div className='container bg-red-400 p-4 md:m-3'>c</div>
              <div className='container bg-red-400 p-4 md:m-3'>d</div>
            </div>
            
            {/* <button className='bg-[#fbf24d] text-[#000000] w-[200px] rounded-md font-bold text-2xl my-6 mx-auto py-3'>Hire Me!</button> */}
        </div>
        </div>
    </div>
  )
}

export default Projects