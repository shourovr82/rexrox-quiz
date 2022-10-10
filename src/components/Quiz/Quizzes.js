import React, { useContext } from 'react';
import { CategoryContext } from '../../Layout/Main';
import Category from './Category';

const Quizzes = () => {
  const quizCategory = useContext(CategoryContext);
  return (
    <div>
      <section className="py-6  dark:text-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10  gap-4">
          {
            quizCategory.map(qCategory => <Category key={qCategory.id} qCategory={qCategory}></Category>)
          }
        </div>
      </section>

    </div>
  );
};

export default Quizzes;