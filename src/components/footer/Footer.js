import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo.png'


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='vegis_home'>
            <div className='veg_home md:flex md:justify-between md:items-center md:px-20 md:py-5 px-4'>
                <div className='fisrt'>
                    <img src={logo} className='md:w-44 w-40 ' />
                </div>
                <div className='company '>
                    <h2 className='text-green-400 md:mt-0 mt-5 md:text-xl text-lg'> Company </h2>
                    <ul className='text-white flex flex-col gap-3'>
                        <li className='list-none hover:border-b border-yellow-300 hover:duration-500 transition-all md:mt-3 mt-3'> <Link to='/' className='no-underline'> Home </Link></li>

                        <li className='list-none hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/allfruits' className='no-underline'> Veg & fruits  </Link></li>

                        {/* <li className='list-none hover:border-b border-yellow-300 hover:duration-500 transition-all'> <a href='#fruits' className='no-underline'> Fruit's  </a></li> */}

                        <li className='list-none hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/about' className='no-underline'> About </Link></li>

                        <li className='list-none hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to='/feactires' className='no-underline'> Feactures </Link></li>

                        <li className='list-none hover:border-b border-yellow-300 hover:duration-500 transition-all'> <Link to="/contact" className='no-underline'> Contact </Link></li>

                    </ul>
                </div>
                <div className='getintouch md:mt-0 mt-4'>
                    <h2 className='text-green-400 md:text-xl text-lg'> Get In Touch </h2>
                    <p className='md:mt-0 mt-3'> Number </p>
                    <p className='md:mt-0 mt-3'> email </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
