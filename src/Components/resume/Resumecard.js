import React from 'react';

const Resumecard = ({ title, subTitle, result, des ,rating}) => {
  return (
    <div className='w-full h-[auto md:h-[calc(100vh/3)] group flex'>
      <div className='w-10 h-[6px] bgOpacity mt-8 md:mt-16 relative'>
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>
      </div>

      <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-6 md:px-10 py-6 md:py-10 flex flex-col justify-between gap-4 shadow-shadowOne'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-2 md:mb-0'>
            <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
            <p className='text-sm mt-1 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
          </div>
          
          <p className='w-16 h-8 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium'>{result}</p>
        </div>
        <div>
          <p className='text-base font-medium text-grey-400 group-hover:text-gray-100 duration-300'>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default Resumecard;
