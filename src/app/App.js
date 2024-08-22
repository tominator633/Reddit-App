import React from 'react';
import AppLayout from './AppLayout';
import Reddits from '../features/Reddits/Reddits';
import RedditDetailWindow from '../components/RedditDetailWindow/RedditDetailWindow';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';



const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>} >
      <Route path=':subredditName' element={<Reddits/>}>
        <Route path=':redditId' element={<RedditDetailWindow/>}/>
      </Route>
  </Route>
));

export default function App() {

  return (
    <RouterProvider router={appRouter} />
  );
}
