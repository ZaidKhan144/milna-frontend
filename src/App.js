import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Groups from './components/Groups/Groups'

const App = () => {
  return (
   
    <HashRouter basename="/">
    <Nav />
    <Home />
    <About />
    <HowItWorks />
    <Groups />
      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/"> <About /> </Route>
      </Switch> */}
    </HashRouter>
  );
}

export default App;
