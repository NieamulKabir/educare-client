import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>,
          loader: ()=>fetch(`https://nieamulkabir.github.io/data-generate-file/alfath.json`)
        },
        {
          path: 'courses',
          element: <Courses></Courses>,
          loader: ()=>fetch(`https://nieamulkabir.github.io/data-generate-file/alfath.json`)
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
