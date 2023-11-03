import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (//max-w-[1240px]
    <div className=' fixed w-full top-0 left-0 shadow-slate-100 bg-slate-950 justify-between items-center h-24  mx-auto px-5 text-white '>
        <div className='flex max-w-[1240px] items-center h-24  mx-auto px-5 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#fbf24d]'>JayTalla</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='p-4'><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            <li className='p-4'><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
            <li className='p-4'><Link to="blog" spy={true} smooth={true} offset={50} duration={500}>Blog</Link></li>
            <li className='p-4'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] border-r bg-[#000000] border-r-gray-900 h-full' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#fbf24d] m-4'>JayTalla</h1>
            <ul className='pt-4 uppercase'>
            <li  className='p-4'><Link onClick={handleNav} to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li  className='p-4'><Link onClick={handleNav} to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            <li  className='p-4'><Link onClick={handleNav} to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
            <li  className='p-4'><Link onClick={handleNav} to="blog" spy={true} smooth={true} offset={50} duration={500}>Blog</Link></li>
            <li  className='p-4'><Link onClick={handleNav} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>            
        </div>
        </div>
    </div>
  )
}
