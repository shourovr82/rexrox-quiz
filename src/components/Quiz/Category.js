import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Category = ({ qCategory }) => {
  const { name, logo, total, id } = qCategory;
  return (
    <div className='w-full mx-auto p-2'>
      <div className="flex relative flex-col items-center  flex-1 p-4 dark:bg-emerald-900 rounded-lg shadow-2xl">
        <div >
          <img className='w-80' src={logo} alt="" />
        </div>
        <p className='absolute top-4  right-4 bg-red-900 px-2 rounded-md '>Total Quiz {total}</p>
        <div className='lg:flex justify-between   items-center  mt-3 pt-3'>
          <p className=" font-mono text-2xl mb-3 lg:m-0">{name} Quiz...</p>
          <Link to={`../quiz/${id}`}>
            <button className="btn font-bold btn-wide  btn-primary rounded-md">Start Practice <FontAwesomeIcon className='ml-3' size="lg" icon={faArrowRight}></FontAwesomeIcon> </button>
          </Link>

        </div>

      </div>
    </div>


  );
};

export default Category;