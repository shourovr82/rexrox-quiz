import React from 'react';
import Quizzes from '../Quiz/Quizzes';
import Hero from './Hero';

const Home = () => {

  return (
    <div className='mt-10'>
      {/* <Hero></Hero> */}
      <Quizzes></Quizzes>
    </div>
  );
};

export default Home;