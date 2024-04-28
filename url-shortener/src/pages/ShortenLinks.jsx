import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import ShortUrlGenerator from "../components/shortener/Shortener";


export const Links = () => {
  return (
    <div className="flex bg-">
      <SidebarMain />
      <div className="w-screen">
      <ShortUrlGenerator/>
      </div>
    </div>
  );
};