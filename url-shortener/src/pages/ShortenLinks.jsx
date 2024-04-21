import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import Shortener from "../components/landingpage/Shortener";
import Custom from "../components/Custom";

export const Links = () => {
  return (
    <div className="flex">
      <SidebarMain />
      <div>
        <Shortener/>
        <Custom />
      </div>
    </div>
  );
};