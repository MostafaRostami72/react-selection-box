import React from 'react';
import {useSelector} from 'react-redux'
import Sidebar from "./components/includes/sidebar";
import Header from "./components/includes/header";
import {sidebarCollapsed} from "./app/Redux/Selectors/SidebarCollapseSelectors";

const App = () => {
    const sidebarIsCollapse = useSelector(sidebarCollapsed);

    return (
        <div className={"page-wrapper light-theme" + (sidebarIsCollapse ? '' : ' toggled ')}>

            <Sidebar/>

            <main className="page-content">
                <div id="overlay" className="overlay"/>
                <div className="container-fluid">

                    <Header/>

                </div>
            </main>
        </div>
    )
}

export default App
