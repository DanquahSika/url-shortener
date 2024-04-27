import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import Alllinks from "../components/alllinks/All-links";

const AllLinks = () => {
  return (
    <div className="flex">
      <SidebarMain />
      <div className="w-screen">
        <Alllinks />
      </div>
    </div>
  );
};

export default AllLinks;
