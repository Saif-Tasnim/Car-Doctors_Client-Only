import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-16 mt-11'>
            <div className='text-center mb-6'>
                <h1 className='text-[#FF3811]  font-bold text-xl mb-5'>Service</h1>
                <h1 className='font-bold text-[#151515] text-4xl mb-5'>Our Service Area</h1>
                <p className='text-[#737373] w-[700px] h-[60px] mx-auto mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            {/* card design for service section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service =>
                        <>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-6 pt-10 w-full h-[208px] object-fill">
                                    <img src={service.img} alt="Car Products" className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title text-[#444444] font-bold">
                                        {service.title}
                                    </h2>

                                    <div className='flex justify-between items-center'>

                                        <p className='pt-4 text-[#FF3811] font-semibold'>
                                            Price : $ <span>{service.price}</span></p>

                                        <Link to={`/checkout/${service._id}`}>
                                            <button className='pt-4 text-[#FF3811]'>
                                                <HiArrowNarrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>

                    )
                }
            </div>
        </div>
    );
};

export default Services;