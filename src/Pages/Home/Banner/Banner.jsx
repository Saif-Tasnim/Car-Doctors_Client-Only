import React from 'react';

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full mb-16 h-[650px]">
            {/* slide 1 start */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                {/* banner text  */}
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">

                    <div className='text-white space-y-7 w-1/2 pl-24 pt-24 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>

                            <button className='bg-[#FF3811] rounded-md px-4 py-4 mr-5 transition-all ease-in duration-600 hover:text-lg'> Discover More </button>

                            <button className='rounded-md px-4 py-4 
                            transition-all ease-in duration-600 hover:bg-white hover:text-black' style={{
                                    border: "1px solid #fff"
                                }}> Latest Project </button>
                        </div>
                    </div>
                </div>

                {/* slider change buttons */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-7 bg-[#FF3811;] text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811;] text-white">❯</a>
                </div>
            </div>
            {/* slide 1 end */}

            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />

                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">

                    <div className='text-white space-y-7 w-1/2 pl-24 pt-24 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>

                            <button className='bg-[#FF3811] rounded-md px-4 py-4 mr-5 transition-all ease-in duration-600 hover:text-lg'> Discover More </button>

                            <button className='rounded-md px-4 py-4 
                            transition-all ease-in duration-600 hover:bg-white hover:text-black' style={{
                                    border: "1px solid #fff"
                                }}> Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-7 text-2xl bg-[#FF3811;] text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle text-2xl bg-[#FF3811;] text-white">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />

                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">

                    <div className='text-white space-y-7 w-1/2 pl-24 pt-24 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>

                            <button className='bg-[#FF3811] rounded-md px-4 py-4 mr-5 transition-all ease-in duration-600 hover:text-lg'> Discover More </button>

                            <button className='rounded-md px-4 py-4 
                            transition-all ease-in duration-600 hover:bg-white hover:text-black' style={{
                                    border: "1px solid #fff"
                                }}> Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-7 bg-[#FF3811;] text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811;] text-white">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />

                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">

                    <div className='text-white space-y-7 w-1/2 pl-24 pt-24 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>

                            <button className='bg-[#FF3811] rounded-md px-4 py-4 mr-5 transition-all ease-in duration-600 hover:text-lg'> Discover More </button>

                            <button className='rounded-md px-4 py-4 
                            transition-all ease-in duration-600 hover:bg-white hover:text-black' style={{
                                    border: "1px solid #fff"
                                }}> Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-7 bg-[#FF3811;] text-white">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811;] text-white">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />

                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">

                    <div className='text-white space-y-7 w-1/2 pl-24 pt-24 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>

                            <button className='bg-[#FF3811] rounded-md px-4 py-4 mr-5 transition-all ease-in duration-600 hover:text-lg'> Discover More </button>

                            <button className='rounded-md px-4 py-4 
                            transition-all ease-in duration-600 hover:bg-white hover:text-black' style={{
                                    border: "1px solid #fff"
                                }}> Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-7  bg-[#FF3811;] text-white">❮</a>
                    <a href="#slide6" className="btn btn-circle  bg-[#FF3811;] text-white">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />

                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    
                    <div className='text-white space-y-7 w-1/2 pl-24 pt-24 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            
                            <button className='bg-[#FF3811] rounded-md px-4 py-4 mr-5 transition-all ease-in duration-600 hover:text-lg'> Discover More </button>
                            
                            <button className='rounded-md px-4 py-4 
                            transition-all ease-in duration-600 hover:bg-white hover:text-black' style={{
                                border: "1px solid #fff"
                            }}> Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-7  bg-[#FF3811;] text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-[#FF3811;] text-white">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;