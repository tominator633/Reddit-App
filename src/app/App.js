import React from 'react';
import AppLayout from './AppLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Reddits from '../features/Reddits/Reddits';
import RedditDetailWindow from '../components/RedditDetailWindow/RedditDetailWindow';
import redditData from '../data/redditData';
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