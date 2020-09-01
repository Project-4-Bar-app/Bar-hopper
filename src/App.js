import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import SelectedBar from './SelectedBar/SelectedBar';
import Orders from './Checkout/Orders';

function App() {
  const[ navOption, setNavOption  ] = useState (1)

  return (
    
    <div className="app">
      <Router>
        <Header navOption={navOption} setNavOption={setNavOption}/>
          <Switch>
            <Route exact path="/" render={() => <Home setNavOption = {setNavOption} />} />
            <Route exact path="/menu/:id" render={(props) => <SelectedBar {...props} />} />
            <Route exact path="/orders" render={(props) => <Orders {...props} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
