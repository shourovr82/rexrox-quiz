import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const CategoryContext = createContext([])


const Main = () => {
  const quizCategory = useLoaderData().data;
  return (
    <div>
      <CategoryContext.Provider value={quizCategory}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </CategoryContext.Provider>

    </div>
  );
};

export default Main;