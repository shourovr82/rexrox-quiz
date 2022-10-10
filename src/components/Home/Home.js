import React from 'react';
import Quizzes from '../Quiz/Quizzes';
import Hero from './Hero';

const Home = () => {

  return (
    <div className=''>
      <Hero></Hero>
      <Quizzes></Quizzes>
    </div>
  );
};

export default Home;