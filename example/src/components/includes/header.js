import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MenuIcon} from '@heroicons/react/outline'
import {sidebarCollapsed} from "../../app/Redux/Selectors/SidebarCollapseSelectors";
import {sidebarCollapseAction} from "../../app/Redux/Actions/SidebarCollapseActions";

const Header = () => {
    const dispatch = useDispatch();
    const sidebarIsCollapse = useSelector(sidebarCollapsed);

    const handleSidebarToggle = () => {
        dispatch(sidebarCollapseAction(!sidebarIsCollapse));
    }

    return (
        <div className="row d-flex align-items-center p-3 border-bottom">
            <div className="col-md-1">

                <button className="btn sidebar-collapse-btn" onClick={handleSidebarToggle}>
                    <MenuIcon/>
                </button>
            </div>

            <div className="col-md-8">
                <nav aria-label="breadcrumb" className="align-items-center">

                    <ol className="breadcrumb d-none d-lg-inline-flex m-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Layout 2</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default Header;
