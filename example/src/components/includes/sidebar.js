import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {DocumentTextIcon, ChevronRightIcon, CubeIcon, CursorClickIcon, KeyIcon, PhotographIcon} from '@heroicons/react/outline'

const Sidebar = () => {
    const location = useLocation();
    const {pathname} = location;
    console.log(pathname)

    const items = [
        {
            link: '/react-selection-box',
            title: 'Getting Started',
            active: (pathname === '/react-selection-box' || pathname === '/react-selection-box/'),
            icon: CubeIcon
        },

        {
            link: '/react-selection-box/basic_usage',
            title: 'Basic Usage',
            active: (pathname === '/react-selection-box/basic_usage'),
            icon: CursorClickIcon
        },
        {
            link: '/react-selection-box/examples',
            title: 'Example',
            active: (pathname === '/react-selection-box/examples'),
            icon: DocumentTextIcon
        },
        {
            link: '/react-selection-box/props',
            title: 'Props',
            active: (pathname === '/react-selection-box/props'),
            icon: KeyIcon
        },

        {
            link: '/react-selection-box/styles',
            title: 'Styles',
            active: (pathname === '/react-selection-box/styles'),
            icon: PhotographIcon
        },
    ]

    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">

                <div className="sidebar-item sidebar-brand text-white font-weight-bold">Documentation</div>

                <div className=" sidebar-item sidebar-menu">
                    <ul>
                        <li className="header-menu"><span>Menu</span></li>

                        {
                            items.map((item, key) =>
                                <li key={key} className={"mt-2 " + (item.active ? 'active' : '')}>
                                    <Link to={item.link}>
                                        <item.icon className="sidebar-icon"/>
                                        <span className="menu-text">{item.title}</span>

                                        <ChevronRightIcon className="sidebar-chevron-right"/>
                                    </Link>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
