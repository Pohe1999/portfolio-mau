import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiAward } from 'react-icons/fi'
import { RiContactsLine } from 'react-icons/ri'
import { IoIosCodeWorking } from 'react-icons/io'
import { SlHome } from "react-icons/sl";
import { useState } from 'react'
import { HiOutlineMail, HiOutlineHome } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import LogoFin from '../assets/LogoFin.png'
import About from './About'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [ nav, setNav ] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div name='navbar' className=' w-full h-[80px] flex justify-between items-center px-4 bg-[#082044] text-gray-300'>
      <div className=''>
        <img src={LogoFin} alt='Logo image' style={{width: '90px' }  } />
      </div>

      {/* menu */}
        <ul name='navbar' className='hidden md:flex'>
          <li className='hover:text-pink-600'>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:text-pink-600'>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:text-pink-600'>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='hover:text-pink-600'>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='hover:text-pink-600'>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={ !nav ? 'hidden' : ' p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar border-2 rounded-md border-pink-300' }>
          <li className='mb-1 hover:border-pink-500 border-b-2'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home <HiOutlineHome size={20} />
            </Link>
          </li>
          <li className='mb-1 hover:border-pink-500 border-b-2'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About <CgProfile size={20} />
            </Link>
          </li>
          <li className='mb-1 hover:border-pink-500 border-b-2'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills <FiAward size={20} />
            </Link>
          </li>
          <li className='mb-1 hover:border-pink-500 border-b-2'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work <IoIosCodeWorking size={20} />
            </Link>
          </li>
          <li className='mb-1 hover:border-pink-500 border-b-2'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact <RiContactsLine size={20} />
            </Link>
          </li>          
        </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-80px] duration-300 bg-blue-600 rounded-lg'>
            <a className='flex justify-end w-full text-gray-300 font-semibold' href="https://www.linkedin.com/in/mauricio-portillo-gutierrez-712056235/" target='_blank'><FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-80px] duration-300 background rounded-lg'>
            <a className='flex justify-end w-full text-gray-100 font-semibold' href="https://www.instagram.com/mauriciopgz/" target='_blank'> <FaInstagram size={30} /></a>
          </li>
          <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-80px] duration-300 bg-cyan-500 rounded-lg'>
            <a className='flex justify-end w-full text-gray-300 font-semibold' href="/" target='_blank'> <HiOutlineMail size={30} /></a>
          </li>
          <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-80px] duration-300 bg-[#333333] rounded-lg'>
            <a className='flex justify-end w-full text-gray-300 font-semibold' href="https://github.com/Pohe1999" target='_blank'> <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-80px] duration-300 bg-pink-600 mt-72 rounded-xl'>
            <a className='flex justify-between items-center w-full text-gray-300 font-semibold' href="home">Home <SlHome size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar