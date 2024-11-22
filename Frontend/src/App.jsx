// eslint-disable-next-line no-unused-vars
import React from 'react';
import Signin from './Components/Signin';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element = {<Signup />}> </Route>
        <Route path = "/signin" element = {<Signin />}> </Route>
        <Route path='/home' element = {<Home />}></Route>  
      </Routes>      
    </div>
    </BrowserRouter>
  )
}

export default App