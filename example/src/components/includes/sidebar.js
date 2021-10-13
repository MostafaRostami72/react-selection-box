import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {DocumentTextIcon, ChevronRightIcon} from '@heroicons/react/outline'

const Sidebar = () => {
    const location = useLocation();
    const {pathname} = location;
    console.log(pathname)

    const items = [
        {
            link: '/',
            title: 'Getting Started',
            active: (pathname === '/')
        },

        {
            link: '/basic_usage',
            title: 'Basic Usage',
            active: (pathname === '/basic_usage')
        },
        {
            link: '/examples',
            title: 'Example',
            active: (pathname === '/examples')
        },
        {
            link: '/props',
            title: 'Props',
            active: (pathname === '/props')
        },

        {
            link: '/styles',
            title: 'Styles',
            active: (pathname === '/styles')
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
                                        <DocumentTextIcon className="sidebar-icon"/>
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
