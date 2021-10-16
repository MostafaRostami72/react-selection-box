import React, {useEffect, useState, lazy, Suspense} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {useDispatch, useSelector} from 'react-redux'
import {sidebarCollapsed} from "./app/Redux/Selectors/SidebarCollapseSelectors";
import {sidebarCollapseAction} from "./app/Redux/Actions/SidebarCollapseActions";
import Sidebar from "./components/includes/sidebar";
import Header from "./components/includes/header";
import TopProgress from "./components/includes/top_progress";
import RightSide from "./components/includes/right_side";
import 'react-selection-box/dist/index.css'
import "nprogress/nprogress.css";

const Home = lazy(() => import('./pages/home'));
const BasicUsage = lazy(() => import('./pages/basic_usage'));
const Examples = lazy(() => import('./pages/examples'));
const PropsPage = lazy(() => import('./pages/props'));
const Styles = lazy(() => import('./pages/styles'));

const App = () => {
    const sidebarIsCollapse = useSelector(sidebarCollapsed);
    const location = useLocation();
    const dispatch = useDispatch();

    const handleSidebarToggle = () => {
        dispatch(sidebarCollapseAction(!sidebarIsCollapse));
    }

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0); //Go to top on every page load

        if (window.innerWidth < 992) {
            setTimeout(() => {
                dispatch(sidebarCollapseAction(true));
            }, 500)
        }
    }, [location]);

    return (
        <div className={"page-wrapper light-theme" + (sidebarIsCollapse ? '' : ' toggled ')}>
            <TopProgress isLoading={isLoading}/>

            <Sidebar/>

            <main className="page-content h-100">
                <div id="overlay" className="overlay" onClick={handleSidebarToggle}/>

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
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <Switch>
                                            <Route path="/react-selection-box/basic_usage" exact component={BasicUsage}/>
                                            <Route path="/react-selection-box/examples" exact component={Examples}/>
                                            <Route path="/react-selection-box/props" exact component={PropsPage}/>
                                            <Route path="/react-selection-box/styles" exact component={Styles}/>
                                            <Route path="/react-selection-box/" component={Home}/>
                                        </Switch>
                                    </Suspense>
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
