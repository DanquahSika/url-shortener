import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import LinksDashboard from "../components/dashboard/profile";

const Dashboard = () => {
  return (
    <div className="flex">
      <SidebarMain />
      <div className="w-screen px-20">
        <LinksDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
