import React from "react";
import "./style.css";
import Dbox from "./Dbox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div>
        <div>
          <Header />
          <Sidebar />
        </div>
        <div>
          <h1 className="title">DashBoard</h1>
          <Dbox />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
