import React from "react";
import SidebarMain from "../components/sidebar/SidebarMain";
import Shortener from "../components/shortener/Shortener";
import ShortUrlGenerator from "../components/shortener/Shortener";
import Custom from "../components/shortener/Custom";

export const Links = () => {
  return (
    <div className="flex">
      <SidebarMain />
      <div className="w-screen">
      <ShortUrlGenerator/>
        <Custom />
      </div>
    </div>
  );
};