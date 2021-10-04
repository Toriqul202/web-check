

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Header from './components/Header/Header';
import Navbars from "./components/Nav/Navbar";
import Sampleabout from "./components/Sample-about/Sample-about";
import Sampleservices from "./components/Sample-services/Sample-services";

import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";

function App() {
 
  return (
    
     <Router>
       <Navbars></Navbars>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
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
          <Route>
           <NotFound></NotFound>
          </Route>
        </Switch>
     
    </Router>
    
  );
}

export default App;
