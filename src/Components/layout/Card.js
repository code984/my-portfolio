import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Card = ({ title, des, icon }) => {
    return (
        <div className="w-full px-6 md:px-12 py-8 md:py-10 h-auto md:h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
            <div className="h-60 md:h-72 py- overflow-y-hidden">
                <div className="flex h-full flex-col gap-4 md:gap-6 translate-y-8 md:translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-center items-center">
                        <span className="text-4xl md:text-5xl text-designColor">{icon}</span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 text-center">
                        <h2 className="text-base md:text-lg font-titleFont font-bold text-gray-300">
                            {title}
                        </h2>
                        <p className="text-sm md:text-base">{des}</p>
                        <span className="text-lg md:text-xl text-designColor">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;



