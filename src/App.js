import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resturant from './component/Basics/Resturant';
import Navbar from './component/Basics/Navbar';
import Footer from './component/Basics/footer'; // Corrected import
import GeneratePassword from './component/Basics/GeneratePassword';
import Country from './component/Basics/Country';
// import Test from './component/Basics/Test';

import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Service from './component/Pages/Service'; // Corrected import
import ClickCounter from './component/Basics/Counter';


const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Resturant" element={<Resturant />} />
          <Route path="/GeneratePassword" element={<GeneratePassword />} />
          <Route path="/Country" element={<Country />} />

        </Routes>
      </Router>
      {/*
      <Resturant/>*/}
      <div className="footer-container">
      {<ClickCounter /> }
      <Footer />
      </div>
    </div>
  );
}

export default App;