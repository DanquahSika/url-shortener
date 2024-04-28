import React from "react";
import BasicBars from "../components/alllinks/Periodclicks";
import PieActiveArc from "../components/alllinks/Pieclicks";
import SidebarMain from "../components/sidebar/SidebarMain";

const Analytics = () => {
  return (
    <div className="flex">
      <SidebarMain/>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BasicBars />
          <PieActiveArc />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
