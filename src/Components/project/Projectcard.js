import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const Projectcard = ({ title, des, src }) => {
    return (
        <div className='w-full px-4 md:px-8 py-6 md:py-8 h-[80%] rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
            <div className='w-50 h-[50%] md:h-[60%] overflow-hidden item-center rounded-t-lg'>
                <img
                    className='w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer'
                    src={src}
                    alt='project'
                />
            </div>
            <div className='w-full flex flex-col mt-4'>
                <div className='flex  items-center justify-between'>
                    <h3 className='text-base md:text-lg font-semibold mb-2 text-center text-designColor'>{title}</h3>
                    <div className='flex gap-4'>
                        <a
                            href='#'
                            className='text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'
                        >
                            <BsGithub />
                        </a>
                        <a
                            href='#'
                            className='text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'
                        >
                            <FaGlobe />
                        </a>
                    </div>

                    
                    
                </div>
                <p className='text-xs md:text-sm text-gray-400 mb-3 text-center'>{des}</p>
            </div>
        </div>
    );
};

export default Projectcard;

