import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Sidebar from "./components/includes/sidebar";
import Header from "./components/includes/header";
import {sidebarCollapsed} from "./app/Redux/Selectors/SidebarCollapseSelectors";
import Home from "./pages/home";
import RightSide from "./components/includes/right_side";
import BasicUsage from "./pages/basic_usage";
import 'react-selection-box/dist/index.css'

const App = () => {
    const sidebarIsCollapse = useSelector(sidebarCollapsed);

    return (
        <div className={"page-wrapper light-theme" + (sidebarIsCollapse ? '' : ' toggled ')}>

            <Sidebar/>

            <main className="page-content h-100">
                <div id="overlay" className="overlay"/>
                <div className="container-fluid h-100">

                    <Header/>

                    <div className="row p-lg-4 article-content">
                        <article className="main-content col-md-9 pr-lg-5 position-relative">
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/basic_usage" exact component={BasicUsage}/>
                            </Switch>
                        </article>

                        <aside className="col-md-3 d-none d-md-block border-left">
                            <RightSide/>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
