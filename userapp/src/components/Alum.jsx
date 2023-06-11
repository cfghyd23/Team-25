import React from 'react';
import Sbar from './Sbar';
import ChatInterface from './chat';
import './Alum.css'

function Alum() {
  return (
   
    <div className="row"> 
    <div className="col-md-3">
        <div className = "side-bar">
                <Sbar/>
        </div>
    </div>
    <div className="col-md-9"> 
            <div className = "chat">
               <div className = "logo">
                <p>Alum Chat</p>
                <img src = "https://rainbowhome.in/wp-content/uploads/2014/10/logo-6.png" alt height="70" width="140"/>
                
               </div>
                <ChatInterface/>
            </div>
    </div>
   
   

    </div>
  );
}

export default Alum;
