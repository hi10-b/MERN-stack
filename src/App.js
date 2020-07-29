import React from 'react';
import './App.css';
import Trial from './components/Trial'
import TopGrid from './components/TopGrid'
import "react-bootstrap";
import NavBar from './components/navBarComponents/NavBar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">

        <NavBar/>
        <TopGrid/>
     
      <Post/>
    </div>
  );
}

export default App;
