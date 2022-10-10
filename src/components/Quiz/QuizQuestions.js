import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import QuizOptions from './QuizOptions';

const QuizQuestions = ({ quizQuestion }) => {
  const { question, options, id } = quizQuestion;
  const [correct, setCorrect] = useState(null);





  return (
    <div className='relative w-3/4 p-10 rounded-2xl mx-auto mt-10 bg-slate-400'>
      <div className='py-4 mb-3'>
        <h3 className='font-mono font-semibold text-2xl text-emerald-800'>{question}</h3>
        <span className='absolute top-4 right-4 text-emerald-800 text-2xl'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {
          options.map(option => <QuizOptions quizQuestion={quizQuestion} key={option} id={id} question={question} option={option}></QuizOptions>)
        }
      </div>
    </div>
  );
};

export default QuizQuestions;



