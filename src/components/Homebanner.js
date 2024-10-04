import React, { useState } from 'react';

const Homebanner = () => {
    return (
        <div className='home_banner my-10' id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='md:grid md:grid-cols-4 gap-2'>
                        <div className='card border border-gray-400'>
                            <div className='image_div'>
                                <img src="https://www.shutterstock.com/shutterstock/videos/3532606713/thumb/12.jpg?ip=x480" className='' />
                            </div>
                            <div className='card-body'>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                            </div>
                        </div>
                        <div className='card border border-gray-600 '>
                            <div className='image_div'>
                                <img src="https://www.shutterstock.com/shutterstock/videos/3532606713/thumb/12.jpg?ip=x480" className='' />
                            </div>
                            <div className='card-body'>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                            </div>
                        </div>

                        <div className='card border border-gray-400'>
                            <div className='image_div'>
                                <img src="https://www.shutterstock.com/shutterstock/videos/3532606713/thumb/12.jpg?ip=x480" className='' />
                            </div>
                            <div className='card-body'>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                            </div>
                        </div>

                        <div className='card border border-gray-400 cursor-pointer'>
                            <div className='image_div p-2'>
                                <img src="https://www.shutterstock.com/shutterstock/videos/3532606713/thumb/12.jpg?ip=x480" className='' />
                            </div>
                            <div className='card-body'>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Homebanner
