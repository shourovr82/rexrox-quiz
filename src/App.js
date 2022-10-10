import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ErrorPage from './Layout/ErrorPage';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
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
