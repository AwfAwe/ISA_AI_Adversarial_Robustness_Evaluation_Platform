import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import ReportPost from './ReportPost/ReportPost';
import Sidebar from './Sidebar/Sidebar';
import "./ReportStyle.css"
// Blog components



function Report() {
  return (
    // <Router>
      <div className="wrapper">
        <Navbar />
        <div id="report">
          <Sidebar />
          <ReportPost />
        </div>
      </div>
    // </Router>
  );
}

export default Report;
