import React from 'react';
import AppLayout from './AppLayout';
import Reddits from '../features/Reddits/Reddits';
import RedditDetailWindow from '../components/RedditDetailWindow/RedditDetailWindow';
import Subreddits from '../features/Subreddits/Subreddits';
import SubredditDetailWindow from '../components/SubredditDetailWindow/SubredditDetailWindow';
import SavedReddits from '../components/SavedReddits/SavedReddits';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';





const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout/>} >
      <Route path=':subredditName' element={<Reddits/>}>
        <Route path=':redditId' element={<RedditDetailWindow/>}/>
      </Route>
      <Route path='subreddits' element={<Subreddits/>}>
        <Route path=':subredditId' element={<SubredditDetailWindow/>} />
      </Route>
      <Route path='saved' element={<SavedReddits/>}>
        <Route path=':redditId' element={<RedditDetailWindow/>}/>
      </Route>
  </Route>
));

export default function App() {

  return (
    <RouterProvider router={appRouter} />
  );
}



/* TEST CODE */

/* import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
 */