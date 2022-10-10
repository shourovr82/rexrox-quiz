import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Quizzes from './components/Quiz/Quizzes';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './Layout/ErrorPage';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      errorElement: < ErrorPage ></ErrorPage >,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/quizes',
          element: <Quizzes></Quizzes>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/quiz/:id',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        },
      ]
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
