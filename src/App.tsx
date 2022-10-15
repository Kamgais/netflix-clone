import React from 'react';

import {Routes,Route} from 'react-router-dom'
import Private from './Pages/Private/Private';
import PrivateHome from './Pages/Private/PrivateHome/PrivateHome';

import './App.css';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import ListComponent from './Pages/ListComponent/ListComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/private' element={<Private/>}>
        <Route path='/private/private-home' element={<PrivateHome/>} />
        <Route path='/private/list' element = {<ListComponent/>} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
