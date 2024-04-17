import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'


const BigNavbar = () => {
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <>
    <motion.nav className='bigNavContainer'
        {...easeScaleUp}
    >
        <ul className='bigHeaderNavContainer'>
            <NavLink to="/" className='navLinks'>Home</NavLink>
            <NavLink to="/tours" className='navLinks'>Tours</NavLink>
            <NavLink to="/destination" className='navLinks'>Destination</NavLink>
            <NavLink to="/contact" className='navLinks'>Contact</NavLink>
            <NavLink to="/about-us" className='navLinks'>About Us</NavLink>
        </ul>
    </motion.nav>
    </>
  )
}

export default BigNavbar