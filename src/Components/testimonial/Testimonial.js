import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layout/Title';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../College.png';
import pic from "./kishan.jpeg";
import imgs  from "./images.jpeg"
import {FaQuoteLeft} from "react-icons/fa"

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 left-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div className="flex justify-center mt-4 gap-3">{dots}</div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: '#ff014f',
                borderRadius: '50%',
                cursor: 'pointer',
              }
            : {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: 'gray',
                borderRadius: '50%',
                cursor: 'pointer',
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Slide One */}
          <div className="w-full">
            <div className="w-full md:flex gap-8">
              <div className="w-full md:w-[35%] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center">
                <img
                  src={logo}
                  alt="manoj"
                  className="h-80 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm uppercase font-light text-designColor tracking-wide">
                    ReactJS
                  </p>
                  <h3 className="text-2xl font-bold"> Manoj Ahirwar</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Web developer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-full flex flex-col gap-2 justify-between">
              <FaQuoteLeft className=' w-[15%] h-[15%] text-gray-400' />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg p-8 flex flex-col justify-center gap-5">
                  <div className="flex justify-between py-8 items-center border-b-[1px] border-b-gray-600 py-3">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        College Career website
                      </h3>
                      <p className="text-base text-gray-400 mt-4">
                        via mildstone -jan 4, feb -30, 2023 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-light text-gray-400 font-medium leading-6 tracking-wide mt-3">
                    Introducing my professionally designed and developed  website, utilizing the latest technologies such as ReactJS, TailwindCSS, Framer-Motion, React-Slick, and React-Scroll to deliver an interactive and visually compelling user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Two */}
          <div className="w-full">
            <div className="w-full  md:flex gap-8">
              <div className="w-full md:w-[35%] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center">
                <img
                  src={pic}
                  alt="manoj"
                  className="h-80 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm uppercase font-light text-designColor tracking-wide">
                    React JS
                  </p>
                  <h3 className="text-2xl font-bold">Manoj Ahirwar</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Web developer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-full flex flex-col gap-2 justify-between">
                <FaQuoteLeft className=' w-[15%] h-[15%] text-gray-400' />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg p-8 flex flex-col justify-center gap-5">
                  <div className="flex justify-between py-8 items-center border-b-[1px] border-b-gray-600 py-3">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        Kishan Website
                      </h3>
                      <p className="text-base text-gray-400 mt-4">
                      via mildstone -jan 4, feb -30, 2023 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-light text-gray-400 font-medium leading-6 tracking-wide mt-3">
                    Introducing my professionally designed and developed kishan website, utilizing the latest technologies such as ReactJS, TailwindCSS, Framer-Motion, React-Slick, and React-Scroll to deliver an interactive and visually compelling user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ... (add more slides) */}
          <div className="w-full">
            <div className="w-full  md:flex gap-8">
              <div className="w-full md:w-[35%] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center">
                <img
                  src={imgs}
                  alt="manoj"
                  className="h-80 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm uppercase font-light text-designColor tracking-wide">
                    Full Stack Developer
                  </p>
                  <h3 className="text-2xl font-bold">Manoj Ahirwar</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Web developer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-full flex flex-col gap-2 justify-between">
                <FaQuoteLeft className=' w-[15%] h-[15%] text-gray-400' />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg p-8 flex flex-col justify-center gap-5">
                  <div className="flex justify-between py-8 items-center border-b-[1px] border-b-gray-600 py-3">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        Gadiyo Ka Mela
                      </h3>
                      <p className="text-base text-gray-400 mt-4">
                      via mildstone -jan 4, feb -30, 2023 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-light text-gray-400 font-medium leading-6 tracking-wide mt-3">
                  Introducing my professionally designed and developed  website, utilizing the latest technologies such as ReactJS, TailwindCSS, Framer-Motion, React-Slick, and React-Scroll to deliver an interactive and visually compelling user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
