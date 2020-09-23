import React from 'react';
import './App.css';
import Trial32 from './components/Trial32'
import TopGrid from './components/TopGrid'
import "react-bootstrap";
// import NavBar from './components/navBarComponents/NavBar';
import Post from './components/Post';
import AddEvent from './components/admin/addEvent';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventCards from './components/eventCards';
import Menu from './components/menu'


function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
