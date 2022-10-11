import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import QuizOptions from './QuizOptions';

const QuizQuestions = ({ quizQuestion }) => {
  const { question, options, id, correctAnswer } = quizQuestion;
  const [correct, setCorrect] = useState(null);
  const watchCorrectAns = () => {
    setCorrect(!correct)
  }



  return (
    <div className='relative w-11/12 md:w-3/4 md:p-10 p-3 rounded-2xl mx-auto mt-10 bg-slate-400'>
      <div className='py-4 mb-3'>
        <h4 className='font-mono  md:font-semibold mt-4 text-start md:text-center text-2xl text-emerald-800'>{question}</h4>
        <span onClick={() => watchCorrectAns()} className='absolute top-4 right-4 cursor-pointer text-emerald-800 text-2xl'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {
          options.map(option => <QuizOptions quizQuestion={quizQuestion} key={option} id={id} question={question} option={option}></QuizOptions>)
        }

      </div>
      {
        correct ? <h4 className=' text-center font-semibold font-mono mt-5 text-2xl'>Correct Ans : {correctAnswer}</h4> : ''
      }
    </div>
  );
};

export default QuizQuestions;



