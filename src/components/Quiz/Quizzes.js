import React, { useContext } from 'react';
import { CategoryContext } from '../../Layout/Main';
import Category from './Category';

const Quizzes = () => {
  const quizCategory = useContext(CategoryContext);
  return (
    <div id='quiz-section'>
      <h2 className='text-center mt-10 text-2xl font-bold font-mono uppercase'>Select Any Quiz and Start Practice </h2>
      <section className="   text-gray-50">
        <div className="container mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2  items-center justify-center  sm:p-10  gap-4">
          {
            quizCategory.map(qCategory => <Category key={qCategory.id} qCategory={qCategory}></Category>)
          }
        </div>
      </section>
    </div>
  );
};

export default Quizzes;