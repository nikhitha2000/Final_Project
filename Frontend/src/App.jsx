// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Signin from "./Components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import RestaurantMenu from "./Components/RestaurantMenu";
import Checkout from "./Components/Checkout";
import Address from "./Components/Address";
import Payment from "./Components/Payment";
import Success from "./Components/Success";
import Profile from "./Components/Profile";
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
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/restaurantMenu" element={<RestaurantMenu />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
