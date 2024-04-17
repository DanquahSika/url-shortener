import React from "react";
import Longlink from "../components/links/Longlink";
import Shortlink from "../components/links/Shortlink";
import Customize from "../components/links/Customize";
import Customlink from "../components/links/Customlink";

export const Links = () => {

  return (
    <div>
    <Longlink/>
    <Shortlink/>
    <Customize/>
    <Customlink/>

    </div>
  );
}
