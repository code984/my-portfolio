import React from 'react';
import Resumecard from './Resumecard';
import { motion } from 'framer-motion';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col md:flex-row gap-8'
    >
      <div className='w-full md:w-1/2'>
        <div className='py-8 md:py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2018-2022</p>
          <h2 className='text-2xl md:text-4xl font-bold'>Company Experience</h2>
        </div>
        <div className='mt-8 md:mt-12 w-full'>
          <AchievementList />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <div className='py-8 md:py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2021-2023</p>
          <h2 className='text-2xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-8 md:mt-12 w-full'>
          <AchievementList />
        </div>
      </div>
    </motion.div>
  );
};

const AchievementList = () => (
  <div className='mt-6 md:mt-10 w-full h-auto md:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6'>
    <Resumecard
      title='React JS Developer'
      subTitle='MildStone Software Pvt ltd(2022-2023)'
      result='9.5'
      des='Developed responsive web applications using React.js, JavaScript, HTML, and CSS.
      Collaborated with cross-functional teams for UI/UX enhancements.
      Proficient in Redux for state management and API integration.
      Conducted code reviews, followed Agile methodologies.
      Achieved on-time project deliveries, optimized page load times by 20%, and led critical projects.'
    />
    <Resumecard
      title='React Natvie Developer'
      subTitle='MildStone Software Pvt ltd(2022-2023)'
      result='7.5'
      des='Created and maintained mobile applications using React Native.
      Collaborated closely with design and backend teams for seamless app development.
      Proficient in state management with Redux and integrated RESTful APIs.
      Conducted code reviews, adhered to Agile development methodologies.
      Delivered projects on schedule, improved app performance, and led key initiatives.'
    />
    <Resumecard
      title='PHP Developer'
      subTitle='MildStone Software Pvt ltd(2022-2023)'
      result='7.5'
      des='Developed dynamic web applications using PHP, MySQL, and related technologies.
      Collaborated with multidisciplinary teams to implement robust features and functionalities.
      Designed and maintained relational databases, ensuring data integrity and security.
      Conducted code reviews, followed established coding standards, and met project deadlines.
      Contributed to optimizing application performance and troubleshooting technical issues.
      Successfully delivered critical projects, enhancing overall software quality and efficiency.'
    />
  </div>
);

export default Achievement;
