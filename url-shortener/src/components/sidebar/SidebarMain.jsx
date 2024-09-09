import { LayoutDashboard, LifeBuoy, } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar.jsx";
import { IoCreateOutline, IoLogOutOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { GrAnalytics } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";

const SidebarMain = () => {
  return (
    <>
      <div className="flex h-full h-screen z-50 overflow-x-hidden">
        <Sidebar>
        <Link to="/create">
            <SidebarItem icon={<IoCreateOutline size={20} />} text="Create"/>
          </Link>
        <Link to="/dashboard">
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          </Link>
          <Link to="/track">
            <SidebarItem icon={<IoIosLink size={20} />} text="Links" />
          </Link>
          <Link to="/analytics">
            <SidebarItem icon={<GrAnalytics  size={20} />} text="Analytics" />
          </Link>
          <Link to="/settings">
            <SidebarItem icon={<SlSettings size={20} />} text="Setting" />
          </Link>
          <hr/>
          <Link to="/sign">
            <SidebarItem icon={<IoLogOutOutline size={20} />} text="Sign Out" />
          </Link>
        </Sidebar>
      </div>
    </>
  )
}

export default SidebarMain;
