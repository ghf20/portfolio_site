import React from 'react';
import './App.css';
import Nav from './components/nav';
import Main from "./components/main";
import { ScrollPolling } from "./components/navFunctions";


function App() {
    ScrollPolling();
  return (
    <div className="App">
        <Nav/>
        <Main/>
    </div>

  );
}

export default App;
