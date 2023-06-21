import React from 'react';
import SidebarItemHeader from "./SidebarItemHeader";
import SidebarLinkCollapsed from "./SidebarLinkCollapsed";
import SidebarLinkNoCollapsed from "./SidebarLinkNoCollapsed";

const  SidebarItems = () => {
    return (
        <div className="nav">
            <SidebarItemHeader value="Core"/>
                <SidebarLinkNoCollapsed href="/admin" text=" Người Dùng "  icon="fa-solid fa-user" />
                <SidebarLinkNoCollapsed href="index.html" text="Biểu đồ"  icon="fa-sharp fa-solid fa-chart-simple" />
            <SidebarItemHeader value="AddOns"/>
                <SidebarLinkNoCollapsed href="/tripAdmin" text=" quản lý chuyến bay"  icon="fa-sharp fa-solid fa-plane" />
                <SidebarLinkNoCollapsed href="/seatManager" text="quản lý chỗ ngồi" icon="fas fa-user-cog"/>
                <SidebarLinkNoCollapsed href="index.html" text="Log out" icon="fas fa-sign-out-alt"/>
        </div>
    );
};

export default SidebarItems;