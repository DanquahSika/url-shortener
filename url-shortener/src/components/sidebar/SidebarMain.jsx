import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar.jsx";

const SidebarMain = () => {
  return (
    <>
      <div className="flex h-screen z-50 overflow-x-hidden">
        <Sidebar>
          <Link to="/create">
            <SidebarItem icon={<Home size={20} />} text="Create" alert />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          </Link>
          <Link to="/track">
            <SidebarItem icon={<StickyNote size={20} />} text="Links" alert />
          </Link>
          <Link to="/analytics">
            <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          </Link>
          <hr className="my-3" />
          {/* <Link to="/settings">
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
          </Link>
          <Link to="/help">
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Link> */}
        </Sidebar>
      </div>
    </>
  )
}

export default SidebarMain;
