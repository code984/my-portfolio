import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full flex flex-col md:flex-row gap-8'
    >
      <SkillSection
        title='Development Skills'
        skills={[
          { label: 'NodeJS', percentage: 90 },
          { label: 'Sql', percentage: 90 },
          { label: 'PHP', percentage: 60 },
          { label: 'MongoDB', percentage: 60 },
          { label: 'PostgreSql', percentage: 80 },
        ]}
      />

      <SkillSection
        title='Development Skills'
        skills={[
          { label: 'ReactJS', percentage: 90 },
          { label: 'Html', percentage: 90 },
          { label: 'CSS', percentage: 80 },
          { label: 'Bootsrap', percentage: 70 },
          { label: 'JavaScript', percentage: 60 },
        ]}
      />
    </motion.div>
  );
};

const SkillSection = ({ title, skills }) => (
  <div className='w-full md:w-1/2'>
    <div className='py-8 md:py-12 font-titleFont'>
      <p className='text-sm text-designColor tracking-[4px]'>Features</p>
      <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
    </div>
    <div className='mt-8 md:mt-12 w-full flex flex-col gap-4'>
      {skills.map((skill, index) => (
        <SkillBar key={index} label={skill.label} percentage={skill.percentage} />
      ))}
    </div>
  </div>
);

const SkillBar = ({ label, percentage }) => (
  <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>{label}</p>
    <div className='w-full h-2 bg-opacity inline-flex rounded-md mt-3'>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
      >
        <span className='absolute -top-7 right-0'>{`${percentage}%`}</span>
      </motion.div>
    </div>
  </div>
);

export default Skills;
