import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
// import { Component } from 'react';
import Home from './Components/Home/home';
import './index.css'
import Signup from './Components/Signup/signup'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Components/Login/login'


function App() {
  return (
      <div className="App">
       <Router>
      <Routes>
     <Route exact path='/' element={<Home/>}></Route>

     <Route path='/signup' element={<Signup/>}></Route>

     <Route path= '/login' element={<Login/>} ></Route>
     </Routes>
      
      </Router>
      </div>
    
  );
}

export default App;
