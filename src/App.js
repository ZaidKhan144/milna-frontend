import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import HowItWorks from './components/HowItWorks/HowItWorks'
import GroupCarousel from './components/Groups/Groups'
import EventCarousel from './components/Events/Events'

const App = () => {
  return (
   
    <HashRouter basename="/">
    <Nav />
    <Home />
    <About />
    <HowItWorks />
    <GroupCarousel />
    <EventCarousel />
      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/"> <About /> </Route>
      </Switch> */}
    </HashRouter>
  );
}

export default App;
