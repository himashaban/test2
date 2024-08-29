import React from 'react';
import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';


let router =createHashRouter([
  {path:'',element:<Layout/>,children:[
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'category',element:<Categories/>},
    {path:'cart',element:<Cart/>},
    {path:'brands',element:<Brands/>},
    {path:'*',element:<NotFound/>},

  ]}
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
