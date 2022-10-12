import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <section className="flex items-center p-16  text-gray-100 errorPage">
        <div className="container flex flex-col bg-[#915f2367] shadow-lg shadow-[#46200a5d] py-10 rounded-lg w-2/3 items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-500">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl uppercase font-mono font-bold md:text-3xl">page not found</p>
            <p className="mt-4 mb-8 text-white">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to='/' className="px-8 py-3 font-semibold rounded-lg border-[#ff7801a4] border bg-transparent hover:bg-[#ff7601] text-white">Back to Homepage</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;