import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import Alllinks from "../components/analytics/All-links";

const AllLinks = () => {
  return (
    <div classname="flex ">
      <SidebarMain />
      <div className="p-10 m-10">
        <Alllinks />
      </div>
    </div>
  );
};

export default AllLinks;
