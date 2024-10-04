import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Vegitables_vegis } from '../data/Data';

const Relatedfruits = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Find the currently selected item to get its category
    const currentItem = Vegitables_vegis.find(val => val.id === parseInt(id));

    return (
        <div className='related_home md:pt-16 pt-12'>
            <div className='container md:w-[90%] w-full'>
                <h2 className='text-4xl text-center pb-10 text-gray-200'>
                    <span className="wrapper relative inline-block">
                        Related Product's
                        <div className="underline-animation">
                            <div className="spacer-left"></div>
                            <div className="underline"></div>
                            <div className="spacer-right"></div>
                        </div>
                    </span>
                </h2>
                <div className='w-full grid md:grid-cols-5 grid-cols-1 gap-4 gap-y-6 sm:px-0 pb-5'>
                    {Vegitables_vegis
                        .filter(val => val.id !== parseInt(id) && val.category === currentItem.category) // filter by category
                        .map((val) => {
                            return (
                                <div key={val.id} onClick={() => { navigate(`/fruits/${val.id}`); window.scrollTo(0, 0); }}>
                                    <div className='vegitable_map'>
                                        <div className="vegis border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-6px] transition-all duration-500 relative">
                                            <div className='fruits_images_div relative'>
                                                <img src={val.image} className="fruits_images_fruits bg-blue-50 hover:bg-green-200" alt={val.title} />
                                                <div className='share_icon_div absolute top-[15px] right-[15px]'>
                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-white' />
                                                </div>
                                            </div>

                                            <div className="p-[10px]">
                                                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                                    <p className="bg-green-500 w-2 h-2 rounded-full"></p>
                                                    <p>{val.available}</p>
                                                </div>
                                                <p className="text-gray-400 text-lg font-medium">{val.title}</p>
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
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Relatedfruits;
