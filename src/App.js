import React from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Page1}/>
          <Route path="/page2" component={Page2}/>
          <Route path="/page3" component={Page3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
