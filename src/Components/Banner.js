import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaFacebookF,FaPhp, FaNode,FaInstagram, FaTwitter } from 'react-icons/fa';
import {BiLogoReact } from 'react-icons/bi';
import {BsBootstrap } from 'react-icons/bs';
import pic from './Manoj.png';

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "Front End Developer.", "Back End Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 5,
        deleteSpeed: 5,
        delaySpeed: 2000,
    });

    return (
        <section id='home' className='w-full min-h-[800px] py-20 flex flex-col md:flex-row items-center justify-between border-b-[1px] border-b-black '>
            <div className='w-full md:w-1/2 flex flex-col gap-10 md:gap-20 md:pr-4 '>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal text-center md:text-left'>Welcome to my World</h4>
                    <h1 className='text-4xl md:text-6xl font-bold text-center md:text-left text-white'>
                        Hi, I'm <span className='text-designColor capitalize'>Manoj Ahirwar</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-bold text-center md:text-left text-white'>
                        a <span>{text}</span>
                        <Cursor cursorBlinking={false} cursorStyle='' cursorColor='#ff014f' />
                    </h2>
                    <p className='text-sm md:text-base font-bodyFont leading-6 tracking-wide text-center md:text-left'>
                        I use animation as a third dimension to simplify experience and guide through each interaction.
                    </p>
                </div>
                <div className='md:flex md:flex-row md:justify-between'>
                    <div className='md:w-1/2'>
                        <h2 className='text-base uppercase font-titleFont mb-4 text-center md:text-left'>Find me in</h2>
                        <div className='flex justify-center md:justify-start gap-4'>
                            <span className='bannerIcon'><FaFacebookF /></span>
                            <span className='bannerIcon'><FaTwitter /></span>
                            <span className='bannerIcon'><FaInstagram /></span>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-6 md:mt-0'>
                        <h2 className='text-base uppercase font-titleFont mb-4 text-center md:text-left'>Best skill on</h2>
                        <div className='flex justify-center md:justify-start gap-4'>
                            <span className='bannerIcon'><BiLogoReact /></span>
                            <span className='bannerIcon'><FaPhp /></span>
                            
                            <span className='bannerIcon'><BsBootstrap/></span>
                            <span className='bannerIcon'><FaNode/></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 '>
                <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
                    <img src={pic} alt='Manoj' className='max-w-full max-h-full' />
                </div>
            </div>
        </section>
    );
}

export default Banner;
