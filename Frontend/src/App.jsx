// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sigin from './Components/Sigin';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element = {<Signup />}> </Route>
        <Route path = "/signin" element = {<Sigin />}> </Route>
        <Route path='/home' element = {<Home />}></Route>  
      </Routes>      
    </div>
    </BrowserRouter>
  )
}

export default App