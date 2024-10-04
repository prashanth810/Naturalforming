import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Vegitables_vegis } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Relatedfruits from '../relatred products/Relatedfruits';

const Singlepage = () => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const { id } = useParams();  // Get the id from the URL
    const [fruit, setFruit] = useState(null);  // Initialize state for the selected fruit

    // Use useEffect to find and set the fruit when the component mounts or id changes
    useEffect(() => {
        const selectedFruit = Vegitables_vegis.find(item => item.id === parseInt(id));
        setFruit(selectedFruit); // Store the selected fruit in the state
    }, [id]);  // Dependency array includes id, so it re-runs when id changes

    // Function to increment the count
    const handleinc = () => {
        setCount((prev) => prev + 1);
    };

    // Function to decrement the count
    const handledec = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className='singleproduct_home'>
            <div className='container md:w-[90%] text-white md:pt-10 pt-4'>
                <div className='cursor-pointer flex items-center justify-between md:w-[15%] w-[65%]'>
                    <p className='text-white cursor-pointer hover:border-b border-yellow-300 hover:duration-500 transition-all' onClick={() => { navigate('/'); window.scrollTo(0, 0) }}>
                        Home &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                    <p className='text-white cursor-pointer hover:border-b border-yellow-300 hover:duration-500 transition-all' onClick={() => navigate('/allfruits')}>
                        All Product's &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                </div>

                {fruit ? (
                    <div className='flex flex-col sm:flex-row gap-1 pt-4'>
                        <div>
                            <img src={fruit.image} className='h-full w-full sm:max-w-72 rounded-custom-rounded' alt={fruit.title} />
                        </div>
                        <div className='flex-2 border border-gray-400 rounded-lg md:p-8 px-[14px] py-7 mx-2 sm:mx-0 md:mt-0 mt-[10px]'>
                            <div>
                                <p className='flex items-center gap-2 text-4xl font-medium text-gray-200'>{fruit.title.toUpperCase()}
                                    <img className='w-5 cursor-pointer hover:w-6 transition-all duration-500' src='https://cdn-icons-png.freepik.com/256/10015/10015447.png?semt=ais_hybrid' alt="Info" />
                                </p>
                                <div className="flex items-center gap-2 text-center text-green-500 pt-2">
                                    <p className="bg-green-500 w-2 h-2 rounded-full"></p>
                                    <p>{fruit.available}</p>
                                </div>
                                <div className='flex items-center gap-2 justify-between text-sm mt-1 text-gray-200 md:w-[60%] w-[90%] pt-2'>
                                    <p>Discount price: <span className='text-xl text-green-400'>{fruit.discount_price}</span></p>
                                    <p>Original Price: <span className='text-xl text-green-400'>{fruit.price}</span></p>
                                </div>
                                <div className='available_at pt-3 flex items-center gap-2'>
                                    <p className='text-red-500 font-semibold'>Available {fruit.seasons}</p>
                                </div>
                                <div>
                                    <p className='flex items-center gap-2 text-sm font-medium text-gray-200 mt-3'>About
                                        <img src='https://cdn-icons-png.freepik.com/256/12483/12483454.png?semt=ais_hybrid' className='w-[25px]' alt="About" />
                                    </p>
                                    <p className='text-sm text-gray-200 max-w-[700px] mt-2'>{fruit.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className='border border-gray-300 rounded-lg p-8 flex flex-col justify-center items-center'>
                            <div className='flex gap-2'>
                                <button className='border border-gray-300 py-2 px-2 text-[14px] rounded-xl hover:text-green-400 transition-all duration-300'>250 Mg</button>
                                <button className='border border-gray-300 py-2 px-2 text-[14px] rounded-xl hover:text-green-400 transition-all duration-300'>500 Mg</button>
                            </div>

                            <div className='flex gap-2 mt-3'>
                                <button className='border border-gray-300 py-2 px-3 text-[14px] rounded-xl hover:text-green-400 transition-all duration-300'>1 Kg</button>
                                <button className='border border-gray-300 py-2 px-3 text-[14px] rounded-xl hover:text-green-400 transition-all duration-300'>2 Kg</button>
                            </div>

                            <div className='flex gap-2 my-4 border border-gray-500 rounded-lg'>
                                <p className='border-r border-gray-500 py-2 px-[12px] text-[14px] flex justify-center items-center cursor-pointer' onClick={handledec}> - </p>
                                <p className='border-r border-gray-500 py-2 px-[10px] text-[14px] flex justify-center items-center cursor-pointer'> {count} </p>
                                <p className=' py-2 px-[8px] text-[14px] cursor-pointer' onClick={handleinc}> + </p>
                            </div>

                            <div className='total-amount'>
                                <p>Total Amount: <span className='text-green-400 font-bold'>{fruit.discount_price}</span></p>
                                <div className='flex flex-col gap-2 mt-3'>
                                    <div>
                                        <button className='w-full border border-gray-300 font-bold py-2 px-3 text-[14px] rounded-xl hover:text-green-400 transition-all duration-300'>ADD TO CART</button>
                                    </div>
                                    <div>
                                        <button className='w-full border border-gray-300 py-2 px-3 text-[14px] font-bold rounded-xl hover:text-green-400 transition-all duration-300'>BUY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center mt-[32px] gap-[10px]'>
                        <div className='loader'></div>
                        <div className='flex items-center'>
                            <p>Loading...</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Pass the selected fruit category to Relatedfruits component */}
            <Relatedfruits category={fruit ? fruit.category : ''} />
        </div>
    );
};

export default Singlepage;
