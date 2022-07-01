import React from 'react';
import BucketGirl from "../../../img/bucketgirl.png";
const Banner = () => {
    return (
        
            <div className='relative'>
                <div class='hero h-screen lg:h-[60vh] bg-warning relative z-10 '>
                    <div class='hero-content flex-col lg:flex-row'>
                        <div>
                            <p
                              
                                className='text-xl text-gray'
                            >
                                Best Quality
                            </p>
                            <h1
                               
                                class='text-5xl font-bold text-green-600'
                            >
                                Professional Cleaning Service
                            </h1>
                            <p
                           
                                class='py-6 max-w-xl'
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has
                            </p>
                            <button
                              
                                class='btn btn-primary'
                            >
                                Get Started
                            </button>
                        </div>
                        <div className='h-[60vh] shrink-0'>
                            <img src={BucketGirl} class='h-full' alt='' />
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6'>
                    <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                        <input
                            type='text'
                            placeholder='Type here'
                            class='input input-bordered w-full'
                        />
                    </div>
                    <button className='btn btn-primary mt-5'>Get a Quote</button>
                </div>
            </div>
        
    );
};

export default Banner;