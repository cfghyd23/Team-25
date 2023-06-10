
import "bootstrap/dist/css/bootstrap.css";
import Dash from './components/dash';
import Sidebar from './components/bar';
import ChatInterface from "./components/chat";
import React, { Component } from 'react';

import User from "./components/user";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
        <Routes>
              {/* <div className="App">
                <Sidebar />
              </div> */}
                        <Route exact path='/' element={< User />}></Route>  
                        <Route exact path='/user' element={< Sidebar />}></Route> 
                        {/* <Route exact path='/login' element={<Dash />}></Route>    */}
            </Routes>
    </Router>
    
  );
}

export default App;

