import React from 'react';

const QuizOptions = ({ option, id, quizQuestion }) => {
  const { correctAnswer } = quizQuestion;
  const handleCheckAnswere = (option) => {
    if (option === correctAnswer) {
      console.log('matched');
    } else {
      console.log('not matched');
    }


  }

  return (
    <div className='grid flex-grow h-32  hover:bg-slate-300 card bg-base-300 rounded-box place-items-center'>
      <div className='flex items-centerw-full p-3 gap-2 '>
        <input onChange={() => handleCheckAnswere(option)} type="radio" id={option} name={id} value={option} className='radio radio-primary' />
        <label className=' cursor-pointer	 font-semibold' htmlFor={option} >{option}</label>
      </div>

    </div>
  );
};

export default QuizOptions;