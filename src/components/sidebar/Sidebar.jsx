import React from "react";
import SidebarIcon from "./SidebarIcon";

function Sidebar() {
  return (
    <>
      <div className="hidden sm:block overflow-y-scroll  fixed border-r-[1.5px] px-[24px] bg-[#ffffff] border-[#E5EAEE] left-0 top-0 w-[270px] h-screen ">
        <div className="flex top-0 py-[22px] bg-white fixed ">
          <img src="/assets/logo.svg" className="" alt="logo" />
        </div>
        <div className="mt-[50px]  font-jakarta w-full h-full">
        {/* home */}
          <p className="uppercase text-[14px] font-[700]">Home</p>
          <div className=" flex flex-col mt-[5px] ">
            <SidebarIcon name="Modern" icon="ti ti-aperture" />
            <SidebarIcon active={true} name="eCommerce" icon="ti ti-shopping-cart" />
            <SidebarIcon  name="NFT" icon="ti ti-currency-dollar" />
            <SidebarIcon name="Crypto" icon="ti ti-cpu" />
            <SidebarIcon name="General" icon="ti ti-activity-heartbeat" />
            <SidebarIcon name="Music" icon="ti ti-playlist" />
          </div>
          {/* app */}
          <p className=" mt-[24px] uppercase text-[14px] font-[700]">app</p>
          <div className=" flex flex-col mt-[5px] ">
            <SidebarIcon name="Calendar" icon="ti ti-calendar" />
            <SidebarIcon name="Kanban" icon="ti ti-layout-kanban" />
            <SidebarIcon name="Chat" icon="ti ti-message-dots" />
            <SidebarIcon name="Email" icon="ti ti-mail" />
            <SidebarIcon name="Notes" icon="ti ti-notes" />
            <SidebarIcon name="Contact Table" icon="ti ti-phone" />
            <SidebarIcon name="Contact List" icon="ti ti-list-details" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
