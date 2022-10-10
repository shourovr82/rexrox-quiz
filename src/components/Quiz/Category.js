import React from 'react';

const Category = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 dark:bg-emerald-900 rounded-lg shadow-2xl">
        <span className="text-sm">Basic</span>
        <p className="text-5xl font-bold text-center">39€</p>
        <p className="font-semibold text-center">Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt aspernatur a?</p>
        <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-700">Sign up</button>
      </div>
    </div>


  );
};

export default Category;