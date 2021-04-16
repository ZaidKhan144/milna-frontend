import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

const App = () => {
  return (
   
    <HashRouter basename="/">
    <Nav />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
