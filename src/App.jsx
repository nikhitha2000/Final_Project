// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sigin from './Components/Sigin';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element = {<Sigin />}>
        </Route>
      </Routes>      
    </div>
    </BrowserRouter>
  )
}

export default App