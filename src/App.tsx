import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
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
