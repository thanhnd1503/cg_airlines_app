import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const SidebarFooter = () => {
    const userName = useSelector((state) => state.auth?.login?.currentUser?.userDtoResponse?.userName);
    return (
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as: {userName}</div>

        </div>
    );
};

export default SidebarFooter;