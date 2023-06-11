import React from 'react';
import Sidebar from './bar';
import ChatInterface from './chat';
import './user.css'

function User() {
  return (
   
    <div className="row"> 
    <div className="col-md-3">
        <div className = "side-bar">
                <Sidebar/>
        </div>
    </div>
    <div className="col-md-9"> 
            <div className = "chat">
               <div className = "logo">
                <p>General Chat</p>
                <img src = "https://rainbowhome.in/wp-content/uploads/2014/10/logo-6.png" alt height="70" width="140"/>
                
               </div>
                <ChatInterface/>
            </div>
    </div>
   
   

    </div>
  );
}

export default User;
