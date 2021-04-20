import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'

import Routes from './components/Routes/Routes'

const App = () => {
  return (
   
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact> <Routes /> </Route>   
      </Switch>
    </HashRouter>
  );
}

export default App;
