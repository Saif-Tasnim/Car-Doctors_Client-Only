import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import calendar from '../../../assets/flaticons/schedule.png';
import call from '../../../assets/flaticons/telephone.png';
import location from '../../../assets/flaticons/location.png';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>

      {/* special section start */}

      <div className='h-[250px] bg-[#151515] rounded-lg mt-11 mb-16 flex justify-around items-center text-white'>

        <div className='flex gap-5 items-center'>
          <div>
            <img src={calendar} className='w-[38px] h-[38px]' alt="" />
          </div>
          <div>
            <p className='text-base'>We are open monday-friday</p>
            <h4 className='text-2xl font-bold'>7:00 am - 9:00 pm</h4>
          </div>

        </div>

        <div className='flex gap-5 items-center'>
          <div>
            <img src={call} className='w-[38px] h-[38px]' alt="" />
          </div>
          <div>
            <p className='text-base'>Have a question?</p>
            <h4 className='text-2xl font-bold'> +022 2525825   </h4>
          </div>

        </div>

        <div className='flex gap-5 items-center'>
          <div>
            <img src={location} className='w-[38px] h-[38px]' alt="" />
          </div>
          <div>
            <p className='text-base'>Need a repair? our address </p>
            <h4 className='text-2xl font-bold'> Pahartoli , Chattogram </h4>
          </div>
        </div>
      </div>
      {/* special section end */}

    </div>
  );
};

export default Home;