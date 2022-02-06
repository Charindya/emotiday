import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { StartPage } from './app/components/StartPage';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router'
import { EntryPage } from './app/components/EntryPage/EntryPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/entry" element={<EntryPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
