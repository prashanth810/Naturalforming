import React, { useState } from 'react';
import { Vegitables_vegis } from '../data/Data'; // Assuming you have a data file
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Allproductsfv = () => {
    const [selectedCategory, setSelectedCategory] = useState("All"); // State to store selected category
    const navigate = useNavigate();
    const [openfilter, setOpenfilter] = useState(false);

    // Filter products based on selected category
    const filteredProducts = Vegitables_vegis.filter(val => {
        if (selectedCategory === "All") {
            return true; // Show all if "All" is selected
        }
        // Make sure to use consistent category names without extra spaces or apostrophes
        return val.category.trim().toLowerCase() === selectedCategory.toLowerCase(); // Match category
    });

    return (
        <div className='allproducts_home bg-[#0d0a16] text-white py-5'>
            <div className='container md:px-20'>
                <div className='lg:hidden md:hidden'>
                    <div>
                        <button
                            className={`w-full mb-3 border border-white py-2 px-4 hover:text-green-400`}
                            onClick={() => setOpenfilter((prev) => !prev)}> Filter </button>
                    </div>
                    {openfilter ? (
                        <div>
                            <div>
                                <button
                                    className={`w-full  border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "All" && 'text-green-400'}`}
                                    onClick={() => setSelectedCategory("All")}> All </button>
                            </div>

                            <div>
                                <button
                                    className={`w-full my-3 border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Vegetables" && 'text-green-400'}`}
                                    onClick={() => setSelectedCategory("Vegetables")} >  Vegetables </button>
                            </div>

                            <div>
                                <button
                                    className={`w-full border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Fruits" && 'text-green-400'}`}
                                    onClick={() => setSelectedCategory("Fruits")}  > Fruits  </button>
                            </div>

                            <div>
                                <button
                                    className={`w-full my-3 border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Dry Fruits" && 'text-green-400'}`}
                                    onClick={() => setSelectedCategory("Dry Fruits")} > Dry Fruits </button>
                            </div>

                        </div>
                    ) : ("")}
                </div>

                <div className='flex'>
                    {/* Sidebar with Category buttons */}
                    <div className='w-[20%] md:flex flex-col gap-3 hidden md:mb-0 mb-4'>
                        <button
                            className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "All" && 'text-green-400'}`}
                            onClick={() => setSelectedCategory("All")} > All </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Raices" && 'text-green-400'}`}
                            onClick={() => setSelectedCategory("Raices")} >  Raices </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Vegetables" && 'text-green-400'}`}
                            onClick={() => setSelectedCategory("Vegetables")} >  Vegetables </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Oils" && 'text-green-400'}`}
                            onClick={() => setSelectedCategory("Oils")} >  Oils </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Pulses" && 'text-green-400'}`}
                            onClick={() => setSelectedCategory("Pulses")} >  Pulses </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Batani" && 'text-green-400'}`}
                            onClick={() => setSelectedCategory("Batani")} >  Batani </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Fruits" && 'text-green-400'}`} onClick={() => setSelectedCategory("Fruits")}  >  Fruits  </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Nuts" && 'text-green-400'}`} onClick={() => setSelectedCategory("Nuts")} > Nuts  </button>

                        <button className={`border border-white py-2 px-4 hover:text-green-400 ${selectedCategory === "Dryfruits" && 'text-green-400'}`} onClick={() => setSelectedCategory("Dryfruits")} > Dry Fruits  </button>
                    </div>

                    {/* Product listing */}
                    <div className='md:w-[80%] w-full'>
                        <div className='container'>
                            <div className='w-full grid md:grid-cols-5 grid-cols-1 gap-3 gap-y-6 md:px-4 sm:px-0 pb-5'>
                                {filteredProducts.map((val, i) => (
                                    <div key={val.id} onClick={() => { navigate(`/fruits/${val.id}`); window.scrollTo(0, 0); }}>
                                        <div className='vegitable_map'>
                                            <div className="vegis border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-6px] transition-all duration-500 relative">
                                                <div className='fruits_images_div relative'>
                                                    <img src={val.image} className="fruits_images_fruits bg-blue-50 hover:bg-green-200" alt={val.title} />
                                                    <div className='share_icon_div absolute top-[15px] right-[15px]'>
                                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:text-red-600' />
                                                    </div>
                                                </div>
                                                <div className="p-[10px]">
                                                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                                        <p className="bg-green-500 w-2 h-2 rounded-full"></p>
                                                        <p>{val.available}</p>
                                                    </div>
                                                    <p className="text-gray-300 text-lg font-medium">{val.title}</p>
                                                    <p className='text-[11px] text-green-500'>{val.famer}</p>
                                                    <div className='flex justify-between py-[4px]'>
                                                        <p className="text-gray-400 font-semibold text-[11px]">
                                                            Offered price: <span className='text-[14px] text-green-500'>{val.discount_price}</span>
                                                        </p>
                                                        <p className="text-gray-400 font-semibold text-[11px]">
                                                            Original price: <span className='text-[14px] text-green-500'>{val.price}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Show a message if no products match the selected category */}
                                {filteredProducts.length === 0 && <p className='text-gray-400'>No products available in this category.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allproductsfv;
