import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8">
            <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain " />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl font-bold leading-none">Ac mattis
              <span className="dark:text-cyan-400">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
              <span className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </span>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded dark:bg-cyan-400 dark:text-gray-900">Suspendisse</a>
              <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;