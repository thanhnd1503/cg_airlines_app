import React from 'react';
import SidebarItemHeader from "./SidebarItemHeader";
import SidebarLinkCollapsed from "./SidebarLinkCollapsed";
import SidebarLinkNoCollapsed from "./SidebarLinkNoCollapsed";

const  SidebarItems = () => {
    return (
        <div className="nav">
            <SidebarItemHeader value="Core"/>
                <SidebarLinkNoCollapsed href="/" text="Dashboard" icon="fas fa-tachometer-alt"/>
                <SidebarLinkNoCollapsed href="index.html" text="Charts" icon="fas fa-chart-area"/>
            <SidebarItemHeader value="AddOns"/>
                <SidebarLinkNoCollapsed href="index.html" text=" quản lý chuyến bay" icon="fas fa-users"/>
                <SidebarLinkNoCollapsed href="index.html" text="quản lý vé" icon="fas fa-user-cog"/>
                <SidebarLinkNoCollapsed href="index.html" text="Log out" icon="fas fa-sign-out-alt"/>
        </div>
    );
};

export default SidebarItems;