import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import StoriesLine from './components/StoriesLine';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
             <Auth/>
          </Route>
          <Route path="/feeds" exact>
             <Home feeds/>
          </Route>
          <Route path="/messages" exact>
             <Home messages/>
          </Route>
          <Route path="/stories" exact>
             <StoriesLine />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
