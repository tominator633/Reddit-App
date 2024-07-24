import React from 'react';
import AppLayout from './AppLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Reddits from '../components/Reddits/Reddits';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';



const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>} >
      <Route index element={<Reddits/>} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}




/* 
export default function App() {
  return (
    <>
    <Header/>
    <Reddits/>
    <Footer/>
    </>
    
  )
}
 */