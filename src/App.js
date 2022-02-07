import React from 'react'
import profile from "./images/car key.png"
import "./App.css";
function App () {
  return (
    <div className="main">
    <div className="submain">
      <div>
        <div className="imgs">
          <div className="container-image">
          <img src={profile} alt="profile" className="profile"/>
    
          </div>
        </div>
        <div>
          <input type="text"placeholder="Admin id" className="name"/>
        </div>
        <div>
          <input type="text" placeholder="password" className="name"/>
          </div> 
          <br></br><br></br>
          <button class="button">LOGIN</button>
        
      </div>

    </div>
      
  </div>


  );
};
export default App;

