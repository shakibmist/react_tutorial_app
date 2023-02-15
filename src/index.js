// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

setInterval(()=>{
  function Clock(){
    return(
      <h1>Hello {new Date().toLocaleTimeString()}</h1>
      
    );
    
  }
  ReactDOM.render(<App /> ,document.getElementById('root'));
},1000)



// function Clock(){
//   setInterval(
//     function () 
//     {element.innerHTML += "Hello"}, 1000); 

//   return(
//     <h1>Hello {new Date().toLocaleTimeString()}</h1>
//   );
// }

ReactDOM.render(<Clock /> ,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
