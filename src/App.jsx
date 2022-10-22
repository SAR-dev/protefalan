import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UServices from './pages/bef/UServices';
import UAbout from './pages/bef/UAbout';
import UHome from './pages/bef/UHome';
import Gig from './pages/gig/Gig';
import GigCreate from './pages/gig/GigCreate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import UProjects from './pages/bef/UProjects';
import UCourses from './pages/bef/UCourses';
import USingleCourse from './pages/bef/USingleCourse';
import UContact from './pages/bef/UContact';
import USingleProject from './pages/bef/USingleProject';
import UAffiliates from './pages/bef/UAffiliates';
import ChatMessages from './pages/ChatMessages';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/gig/create" exact component={GigCreate} />
          <Route path="/gig" exact component={Gig} />
          <Route path="/messages" exact component={ChatMessages} />
          <Route path="/orders/:type" exact component={Orders} />
          <Route path="/u" exact component={UHome} />
          <Route path="/u/about" exact component={UAbout} />
          <Route path="/u/services" exact component={UServices} />
          <Route path="/u/projects" exact component={UProjects} />
          <Route path="/u/courses" exact component={UCourses} />
          <Route path="/u/contact" exact component={UContact} />
          <Route path="/u/affiliates" exact component={UAffiliates} />
          <Route path="/u/courses/:slug" exact component={USingleCourse} />
          <Route path="/u/projects/:slug" exact component={USingleProject} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
