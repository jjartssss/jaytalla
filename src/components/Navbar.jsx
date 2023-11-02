import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-5 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#fbf24d]'>JayTalla</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Blog</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] border-r bg-[#000000] border-r-gray-900 h-full' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#fbf24d] m-4'>JayTalla</h1>
            <ul className='pt-4 uppercase'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About Me</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Blog</li>
                <li className='p-4'>Contact</li>
            </ul>            
        </div>
    </div>
  )
}
