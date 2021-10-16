import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {useSelector} from 'react-redux'
import {sidebarCollapsed} from "./app/Redux/Selectors/SidebarCollapseSelectors";
import Sidebar from "./components/includes/sidebar";
import Header from "./components/includes/header";
import TopProgress from "./components/includes/top_progress";
import RightSide from "./components/includes/right_side";
import Home from "./pages/home";
import BasicUsage from "./pages/basic_usage";
import Examples from "./pages/examples";
import PropsPage from "./pages/props";
import Styles from "./pages/styles";
import 'react-selection-box/dist/index.css'
import "nprogress/nprogress.css";

const App = () => {
    const sidebarIsCollapse = useSelector(sidebarCollapsed);
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0); //Go to top on every page load
    }, [location]);

    return (
        <div className={"page-wrapper light-theme" + (sidebarIsCollapse ? '' : ' toggled ')}>
            <TopProgress isLoading={isLoading} />

            <Sidebar/>

            <main className="page-content h-100">
                <div id="overlay" className="overlay"/>
                <div className="container-fluid h-100">

                    <Header/>

                    <div className="row p-lg-4 article-content">
                        <article className="main-content col-md-9 pr-lg-5 position-relative">
                            <TransitionGroup>
                                <CSSTransition
                                    classNames="fade"
                                    key={location.key}
                                    onEnter={() => {
                                        setIsLoading(true)
                                    }}
                                    onEntered={() => {
                                        setIsLoading(false)
                                    }}
                                    timeout={1200}
                                >
                                    <Switch>
                                        <Route path="/react-selection-box/basic_usage" exact component={BasicUsage}/>
                                        <Route path="/react-selection-box/examples" exact component={Examples}/>
                                        <Route path="/react-selection-box/props" exact component={PropsPage}/>
                                        <Route path="/react-selection-box/styles" exact component={Styles}/>
                                        <Route path="/react-selection-box/" component={Home}/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
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
