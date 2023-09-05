import React from 'react';
import Resumecard from './Resumecard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col md:flex-row gap-4 md:gap-20'
    >
      <div className='w-full md:w-1/2'>
        <div className='py-6 md:py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2018-2022</p>
          <h2 className='text-2xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-6 md:mt-12 w-full'>
          <ExperienceList />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <div className='py-6 md:py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2021-2023</p>
          <h2 className='text-2xl md:text-4xl font-bold'>Trainer Experience</h2>
        </div>
        <div className='mt-6 md:mt-12 w-full'>
          <ExperienceList />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceList = () => (
  <div className='mt-4 md:mt-10 w-full h-auto md:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6'>
    <Resumecard
      title='React JS Development'
      subTitle='MildStone Software Pvt Ltd(2022-2023)'
      result='8.5'
      des="A React developer crafts interactive web interfaces using the React framework, leveraging JavaScript and components to create engaging user experiences."
                   
    />
    <Resumecard
      title='React Native Development'
      subTitle='MildStone Software Pvt Ltd(2022-2023)'
      result='8.0'
      des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
    />
    <Resumecard
      title='PHP Development'
      subTitle='MildStone Software Pvt Ltd(2022-2023)'
      result='7.0'
      des= "'I'm the PHP wizard who crafts dynamic web experiences. With server-side finesse and database magic, I conjure seamless functionality for engaging online journeys.'"
    />
  </div>
);

export default Experience;
