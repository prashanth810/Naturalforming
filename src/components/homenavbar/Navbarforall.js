import React, { useState } from 'react';
import nav_cart from '../../assets/cart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import nav_logo from '../../assets/logo.png'
import grocessary from '../../assets/grocery-image.png'

const Navbarforall = () => {
    const [showmenu, setShowmenu] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='navbar_all container md:px-20 md:py-[3px] relative bg-[#0b0816]'>
            <nav className='flex items-center justify-between sticky top-0 '>
                <img src={nav_logo} className='md:w-44 w-40 py-4 cursor-pointer' onClick={() => navigate("/")} />
                <ul className='hidden justify-between text-white md:flex md:justify-between gap-4'>
                    <li className='list-none inline-block hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/' className='no-underline'> Home </Link></li>

                    <li className='list-none inline-block hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/allfruits' className='no-underline'> Veg & fruits  </Link></li>

                    {/* <li className='list-none inline-block hover:border-b border-yellow-300 hover:duration-500 transition-all'> <a href='#fruits' className='no-underline'> Fruit's  </a></li> */}

                    <li className='list-none inline-block hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/about' className='no-underline'> About </Link></li>

                    <li className='list-none inline-block hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/feactires' className='no-underline'> Feactures </Link></li>

                    <li className='list-none inline-block hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to="/contact" className='no-underline'> Contact </Link></li>

                </ul>
                <div className='flex items-center gap-3'>
                    <img src={nav_cart} className='md:w-8 w-5 cursor-pointer' />
                    <FontAwesomeIcon icon={faBarChart} className='md:hidden' style={{ color: "white", fontSize: "24px" }} onClick={() => setShowmenu(true)} />
                </div>
            </nav>

            {/* Mobiles screen navbar */}

            <div className={`${showmenu ? "fixed w-[80%] " : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-black text-white transition-all `}>

                <div className='flex items-center justify-between md:px-5 md:py-6 p-4'>
                    <img className='w-[8rem] lg:w-36 ' src={nav_logo} alt='' />
                    <img className='w-7 bg-white' onClick={() => setShowmenu(false)} src={grocessary} alt='' />
                </div>
                <ul className='flex flex-col items-center gap-2 md:mt-5 px-5 text-lg font-medium'>

                    <NavLink to='/' onClick={() => setShowmenu(false)}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>

                    <NavLink to='/allfruits' onClick={() => setShowmenu(false)}><p className='px-4 py-2 rounded inline-block'> Veg & fruits  </p></NavLink>

                    <NavLink to='/fruits' onClick={() => setShowmenu(false)}><p className='px-4 py-2 rounded inline-block'> Fruit's </p></NavLink>
                    <NavLink to='/about' onClick={() => setShowmenu(false)}> <p className='px-4 py-2 rounded inline-block '>About</p> </NavLink>

                    <NavLink to='/feactires' onClick={() => setShowmenu(false)} > <p className='px-4 py-2 rounded inline-block'> Feactures </p> </NavLink>

                    <NavLink to='/contact' onClick={() => setShowmenu(false)}> <p className='px-4 py-2 rounded inline-block'>Contact</p> </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbarforall
