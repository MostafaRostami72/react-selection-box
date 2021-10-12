import React from 'react';
import {Link} from "react-router-dom";
import { DocumentTextIcon,ChevronRightIcon } from '@heroicons/react/outline'

const Sidebar = () => {

    const items = [
        {
            link:'/',
            title: 'Getting Started',
        },

        {
            link:'/basic_usage',
            title: 'Basic Usage',
        },
        {
            link:'',
            title: 'Components',
        },
        {
            link:'',
            title: 'Props',
        },

        {
            link:'',
            title: 'Styles',
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
                            items.map((item,key) =>
                                <li key={key} className="mt-2">
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
