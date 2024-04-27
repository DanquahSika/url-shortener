import { LayoutDashboard, LifeBuoy, } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar.jsx";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";;
import { VscSettingsGear } from "react-icons/vsc";

const SidebarMain = () => {
  return (
    <>
      <div className="flex h-screen z-50 overflow-x-hidden">
        <Sidebar>
        <Link to="/dashboard">
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          </Link>
          <Link to="/create">
            <SidebarItem icon={<IoCreateOutline size={20} />} text="Create" alert />
          </Link>
          <Link to="/track">
            <SidebarItem icon={<IoIosLink size={20} />} text="Links" alert />
          </Link>
          <Link to="/settings">
            <SidebarItem icon={<VscSettingsGear size={20} />} text="Setting" />
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
