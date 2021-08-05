import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'
import Routes from './components/LandingPageComponents/Routes/Routes'
import LogIn from './components/LandingPageComponents/LogIn/LogIn'
import SignUp from './components/LandingPageComponents/SignUp/SignUp'
import AppMain from './components/MainApplicationComponents/AppMain/AppMain'
import CreateGroupForm from './components/MainApplicationComponents/CreateGroupForm/CreateGroupForm'
import UpdateGroup from './components/MainApplicationComponents/UpdateGroup/UpdateGroup'
 
const App = () => {

  return (
   
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact> <Routes /> </Route>
        <Route path="/login" exact> <LogIn /> </Route>  
        <Route path="/signup" exact> <SignUp /> </Route> 
        <Route path="/groupMain"> <AppMain /></Route>
        <Route path="/eventMain"> <AppMain /> </Route>
        <Route path="/createGroup"> <CreateGroupForm /> </Route>
        <Route path="/updateGroup/:id"> <UpdateGroup /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
