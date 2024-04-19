import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import Shortener from "../components/landingpage/Shortener";

export const Links = () => {
  return (
    <div className="flex ">
      <SidebarMain />
      <div>
        <Shortener/>
      </div>
    </div>
  );
};