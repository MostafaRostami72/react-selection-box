import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import GitHubButton from 'react-github-btn';
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
            <div className="col-2 col-md-1 d-flex align-items-center justify-content-start">

                <button className="btn sidebar-collapse-btn" onClick={handleSidebarToggle}>
                    <MenuIcon/>
                </button>
            </div>

            <div className="col-10 col-md-11 d-flex flex-column flex-md-row align-items-end align-items-md-center justify-content-end">
                <div className="github-icon">
                    <GitHubButton href="https://github.com/MostafaRostami72/react-selection-box" data-show-count="true" data-size="large" aria-label="Star react-selection-box on GitHub">Star</GitHubButton>
                </div>

                <a href="https://www.npmjs.com/package/react-selection-box" target="_blank" className="ml-3">
                    <img alt="npm" src="https://img.shields.io/npm/v/react-selection-box.svg"/>
                </a>
            </div>
        </div>
    );
};

export default React.memo(Header);
