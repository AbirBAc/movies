import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import Moviecard from './Components/Moviecard';
import Movielist from './Components/Movielist'
//import Filter from './Components/Filter'






function App() {
  return (
    <div className="App">
      
      <Moviecard></Moviecard>
      <Movielist></Movielist>
    
    </div>
  );
}

export default App;
