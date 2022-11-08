// import React from 'react';

// const Doctor = () => {
//   return (
//     <div className='doctor'>
//       <h1>Doctor is here</h1>
//     </div>
//   );
// };

// export default Doctor;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Ap.css";
import AddEdit from "./AddEdit";
import Home from "./Home";
import View from "./View";
import About from "./About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";

const Doctor = () => {
  return (
    <Router>
      <div className="doctor">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Doctor;
