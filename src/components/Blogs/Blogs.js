import React from 'react';

const Blogs = () => {
  return (
    <div className='md:p-16 w-11/12 mt-10 mx-auto grid gap-4'>


      <div className="text-start p-6 border-l-8 sm:py-8 dark:border-cyan-400 dark:bg-gray-900 dark:text-gray-100">
        <h2 className='font-bold text-2xl'>What is the perpose of react router?</h2>
        <p className='mt-4'> React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React.js is virtual DOM. It is a tree based on JavaScript components created with React that mimics a DOM tree. It does the least amount of DOM manipulation possible in order to keep your React components up to date.</p>
      </div>
      <div className="text-start p-6 border-l-8 sm:py-8 dark:border-cyan-400 dark:bg-gray-900 dark:text-gray-100">
        <h2 className='font-bold text-2xl'>How does context API works?</h2>
        <p className='mt-4'> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's</p>
      </div>
      <div className="text-start p-6 border-l-8 sm:py-8 dark:border-cyan-400 dark:bg-gray-900 dark:text-gray-100">
        <h2 className='font-bold text-2xl'>What do you know about useRef Hooks ?</h2>
        <p className='mt-4'> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
          The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

          Example: How to access the DOM using useRef hook.</p>
      </div>



    </div>
  );
};

export default Blogs; <h2>This is Blogs</h2>