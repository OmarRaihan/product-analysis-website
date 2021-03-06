import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="chart-container">
      <div className="my-24 ml-10">
        <h1 className="text-xl text-purple-500 font-semibold mr-auto my-4 ">Investment VS Revenue</h1>
        <MyLineChart></MyLineChart>
      </div>
      
      <div className="my-24 ml-10">
        <h1 className="text-xl text-orange-500 font-semibold mr-auto my-4">Investment VS Revenue</h1>
        <MyAreaChart></MyAreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
