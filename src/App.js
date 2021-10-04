

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Header from './components/Header/Header';
import Sampleabout from "./components/Sample-about/Sample-about";
import Sampleservices from "./components/Sample-services/Sample-services";

function App() {
  const simpleStyle={
    textAlign:'none'
  }
  return (
    
     <Router>
      
     <div  style={simpleStyle}>
     <nav className="nav">
          
          <Link to="/" className="link">Home</Link>
        
          <Link to="/about" className="link">About</Link>
       
          <Link to="/services" className="link">Services</Link>

          <Link to="/contact" className="link">Contact</Link>
       
    </nav>
     </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
             <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Sampleabout></Sampleabout>
            <Sampleservices></Sampleservices>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
           <Contact></Contact>
          </Route>
        </Switch>
     
    </Router>
    
  );
}

export default App;
