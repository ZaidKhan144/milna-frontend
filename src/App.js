import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'

import Routes from './components/Routes/Routes'
import LogIn from './components/LogIn/LogIn'

const App = () => {
  return (
   
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact> <Routes /> </Route>
        <Route path="/login" exact> <LogIn /> </Route>   
      </Switch>
    </HashRouter>
  );
}

export default App;
