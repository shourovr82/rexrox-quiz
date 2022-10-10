import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

const Quiz = () => {
  const quizesData = useLoaderData().data;
  const quizes = quizesData.questions;
  const quizesName = quizesData.name;
  // console.log(quizesData);
  return (
    <div className='mt-10'>
      <h2 className='text-3xl text-emerald-800 font-bold'> Questions Of {quizesName}</h2>
      {
        quizes.map(quizQuestion => <QuizQuestions key={quizQuestion.id} quizQuestion={quizQuestion}></QuizQuestions>)
      }
    </div>
  );
};

export default Quiz;