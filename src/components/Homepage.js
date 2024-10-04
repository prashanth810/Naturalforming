import React, { useState } from 'react';
import grocessary from '../assets/grocery-image.png';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import Vegitables from './veg/Vegitables';
import Veggies from './vegies/Veggies';
import Raices from './raices/Raices';
import Oils from './oils/Oils';
import Pulses from './pulses/Pulses';
import Batani from './batani/Batani';
import Nuts from './nuts/Nuts';
import Dryfruits from './dryfruits/Dryfruits';

const Homepage = () => {
    const [showmenu, setShowmenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='container nav_bg_image md:px-20 md:pb-8 p-[10px] relative'>
            <div className='md:flex' id='#'>
                <div className='text-white md:mt-48 mt-[1.5rem] max-w-xl'>
                    <h1 className='md:text-6xl text-5xl my-3 font-semibold leading-normal'>Natular forms <br /> delivery in <span className='font-light'>15 mins.</span></h1>
                    <p>Grocify offer a wide range of product's, including fresh product's, meat's, dairy, baked ggods and non-perishable items.</p>

                    <div className='mt-10'>
                        <a href='#' className='bg-yellow-500 rounded-3xl md:py-3 md:px-8 p-[10px] font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 duration-300 hover:border border-transparent'> Order Now </a>
                        <a href='#' className='bg-yellow-500 rounded-3xl md:py-3 md:px-8 p-[10px] font-medium hover:bg-transparent hover:border-yellow-300 duration-300 hover:border border-transparent'> Download App <span className='text-lg inline-block rotate-90 '> &#10148;</span> </a>
                    </div>
                </div>
                <div className='md:pt-0 pt-[30px]'>
                    <img src={grocessary} className='w-full' />
                </div>
            </div>
            <Raices />
            <Veggies />
            <Vegitables />
            <Oils />
            <Pulses />
            <Batani />
            <Nuts />
            <Dryfruits />
        </div >
    )
}

export default Homepage
