// eslint-disable-next-line no-unused-vars
import React,{useEffect} from "react";
import Signin from "./Components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import RestaurantMenu from "./Components/RestaurantMenu";
import Checkout from "./Components/Checkout";

function App() {
  useEffect(() => {
    const handleClearLocalStorage = () => {
      localStorage.removeItem("username");
      console.log("Local storage cleared");
    };
    window.addEventListener("beforeunload", handleClearLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", handleClearLocalStorage);
    };
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/signin" element={<Signin />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/restaurantMenu" element={<RestaurantMenu />}></Route>
          <Route path = "/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
