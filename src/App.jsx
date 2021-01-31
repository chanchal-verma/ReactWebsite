import React from 'react';
import { Switch , Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js"
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';
import Service from './Service';
import Navbar from './Navigation';


const App = ()=>{
    return (
        <>
        <Navbar color="#b7a105"/>
        <Switch>
            <Route exact path="/" component={()=><Home color="#3498db"/>}></Route>
            <Route exact path="/About" component={()=><About color="#b7a105"/>}></Route>
            <Route exact path="/Contact" component={ContactForm}></Route>
            <Route exact path="/Service" component={Service}></Route>
        </Switch>
        </>
    );
}

export default App;