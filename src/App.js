import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SelectedBar from './SelectedBar/SelectedBar';
import Orders from './Checkout/Orders';
import ExploreBars from './Explore/ExploreBars';

function App() {
  const[ navOption, setNavOption  ] = useState (1)
  
  const[locate, setLocate] = useState("/menu/luckydog-brooklyn/osq=Lucky+Dog")
    
  return (
    
    <div className="app">
      <Router>
        <Header navOption={navOption} setNavOption={setNavOption} locate={locate}/>
          <Switch>
            <Route exact path="/" render={() => <Home setNavOption = {setNavOption} setLocate={setLocate} />} />
            <Route exact path="/menu/:id/:loc" render={(props) => <SelectedBar {...props} />} />
            <Route exact path="/orders" render={() => <Orders />} />
            <Route exact path="/explore" render={() => <ExploreBars />} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
