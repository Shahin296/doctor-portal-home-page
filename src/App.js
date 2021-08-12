import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"
import Home from './components/Home/Home/Home';

const App = () => {
    return (
    
           
           <Router>
              
              <Switch>
                  <Route path="/" exact>
                      <Home/>
                  </Route>
              </Switch>
           </Router>

    );
};

export default App;