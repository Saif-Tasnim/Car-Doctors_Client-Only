import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import product from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="h-[567px] mb-16 mt-11 pt-4">
            <div className="flex flex-col lg:flex-row gap-8">
             <div className="lg:w-full relative mr-6">
             <img src={person} className='rounded-lg shadow-2xl' />
                <img src={product} className='rounded-lg shadow-2xl w-3/4 absolute -right-5 top-[45%]' />
             </div>
                <div>
                    <h1 className='text-[#FF3811] text-xl font-bold'>About Us</h1>
                    <h1 className="text-5xl font-bold mb-3 mt-5"> We are qualified & of experience in this field </h1>
                    
                    <p className="py-5 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    
                    <p className="text-[#737373] mb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    
                    <button className="btn bg-[#FF3811] text-white transition-all ease-in duration-600 hover:text-black"> Get More Info </button>
                </div>
            </div>
        </div>
    );
};

export default About;