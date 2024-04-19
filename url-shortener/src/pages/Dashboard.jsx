import React from "react";
import Tracker from "../components/dashboard/tracker/Tracker";
import SidebarMain from "../components/sidebar/SidebarMain";
import LinksDashboard from "../components/dashboard/profile";

const Dashboard = () => {
  return (
    <div className="flex">
      <SidebarMain />
      <div className="px-20">
        <LinksDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
