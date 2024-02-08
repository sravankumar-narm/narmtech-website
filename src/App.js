import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Offers from "./components/Offers/Offers.js"
import Consulting from "./components/Consulting/Consulting.jsx";
import Contactus from "./components/Contactus/contactus.js";
import Dummy from "./components/Dummy/Dummy.js";
import Legal from "./components/Legal/Legal.js";
import Ourteam from "./components/Ourteam/Ourteam.js";
import Aboutus from "./components/aboutus/Aboutus.js";


const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/consulting" element={<Consulting />} />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route exact path="/dummy" element={<Dummy />} />
        <Route exact path="/legal" element={<Legal />} />
        <Route exact path="/ourteam" element={<Ourteam />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
