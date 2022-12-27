import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
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
import { useEffect } from 'react';
import { getLocalAccessToken, removeLocalAccessToken, removeLocalRefreshToken } from './helpers';
import useAuthStore from './store';
import GigUpdate from './pages/gig/GigUpdate';
import Search from './pages/Search';
import UpdateProfile from './pages/profile/UpdateProfile';
// import jwt_decode from "jwt-decode";

const App = () => {
  const { setAccessToken } = useAuthStore()

  useEffect(() => {
    const token = getLocalAccessToken()
    if(token){
      setAccessToken(token)
    }
    // if(token){
    // if (Date.now() >= jwt_decode(token).iat * 1000) {
    //   removeLocalAccessToken()
    //   removeLocalRefreshToken()
    // } else {
    //   setAccessToken(getLocalAccessToken())
    // }}
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/update" exact component={UpdateProfile} />
        <Route path="/profile/:username" exact component={Profile} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/gig/create" exact component={GigCreate} />
        <Route path="/gig/:id" exact component={Gig} />
        <Route path="/search/:keyword" exact component={Search} />
        <Route path="/gig/:id/update" exact component={GigUpdate} />
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
  );
};

export default App;
