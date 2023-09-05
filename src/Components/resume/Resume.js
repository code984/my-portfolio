import React, { useState } from 'react';
import Title from '../layout/Title';
import Resumecard from './Resumecard';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';

const Resume = () => {
  const [educationData, setEducation] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center mb-12'>
        <Title title='1 YEARS OF EXPERIENCE' des='My Resume' />
      </div>
      <div>
        <ul className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          <li
            onClick={() => {
              setEducation(true);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[2px]`}
          >
            Education
          </li>

          <li
            onClick={() => {
              setEducation(false);
              setSkillData(true);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`${
              skillData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[2px] `}
          >
            Professional Skill
          </li>

          <li
            onClick={() => {
              setEducation(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`${
              experienceData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[2px] `}
          >
            Experiences
          </li>

          <li
            onClick={() => {
              setEducation(false);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
          >
            Achievement
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
