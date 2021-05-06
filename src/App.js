import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'

import Routes from './components/LandingPageComponents/Routes/Routes'
import LogIn from './components/LandingPageComponents/LogIn/LogIn'
import SignUp from './components/LandingPageComponents/SignUp/SignUp'
import MainApp from './components/MainApplicationComponents/AppMain/AppMain'
 
const App = () => {
  return (
   
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact> <Routes /> </Route>
        <Route path="/login" exact> <LogIn /> </Route>  
        <Route path="/signup" exact> <SignUp /> </Route> 
        <Route path="/demo" exact> <MainApp /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
