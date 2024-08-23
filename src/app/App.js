import React from 'react';
import AppLayout from './AppLayout';
import Reddits from '../features/Reddits/Reddits';
import RedditDetailWindow from '../components/RedditDetailWindow/RedditDetailWindow';
import Subreddits from '../features/Subreddits/Subreddits';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';



const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>} >
      <Route path=':subredditName' element={<Reddits/>}>
        <Route path=':redditId' element={<RedditDetailWindow/>}/>
      </Route>
      <Route path='subreddits' element={<Subreddits/>}/>
  </Route>
));

export default function App() {

  return (
    <RouterProvider router={appRouter} />
  );
}
