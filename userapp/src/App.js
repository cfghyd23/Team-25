
import "bootstrap/dist/css/bootstrap.css";
import Dash from './components/dash';
import Alum from "./components/Alum"
import React, { Component } from 'react';
import Login from "./components/login";
import User from "./components/user";
import Housing from "./components/HousingNeeds"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Medical from "./components/Medical"
import Sponsor from "./components/Sponsorship"

function App() {
  return (

    <Router>
        <Routes>
              {/* <div className="App">
                <Sidebar />
              </div> */}
                        <Route exact path='/' element={< Login />}></Route>  
                        <Route exact path='/user' element={< User />}></Route> 
                        <Route exact path='/Admin' element={< Dash/>}></Route> 
                        <Route exact path='/HousingNeeds' element={< Housing/>}></Route> 
                        <Route exact path='/Medical' element={< Medical/>}></Route> 
                        <Route exact path='/Sponsor' element={< Sponsor/>}></Route> 
                        <Route exact path='/Alum' element={< Alum/>}></Route> 
                        {/* <Route exact path='/login' element={<Dash />}></Route>    */}
            </Routes>
    </Router>
    
  );
}

export default App;

