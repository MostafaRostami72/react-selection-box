import React from 'react';
import {Link} from "react-router-dom";
import Code from "../components/code";
import NextPage from "../components/next";

const Home = () => {
    return (
        <div className="my-3">
            <h1 className="">React Selection box (react select input)</h1>
            <p className="lead">
                A beautiful and responsive Select Input control for ReactJS with singleselect, multiselect, rangeselect and autocomplete (async) support.
            </p>

            <h3 className="mt-5 font-weight-bold">Getting Started</h3>
            <p>Start by installing <span className="bg-info px-1 font-weight-500">react-selection-box</span></p>


            <Code dark={false} className="mt-4 ">
                npm install --save react-selection-box
            </Code>

            <h3 className="mt-5 font-weight-bold">Usage</h3>

            <Code className="mt-3">
                {
                    `
import Selection from 'react-selection-box'
import 'react-selection-box/dist/index.css'
`
                }
            </Code>

            <h3 className="mt-5 font-weight-bold">Styles</h3>

            <Link to="/styles">Additional Details about the styles</Link>

            <NextPage
                title="Basic Usage"
                url="/basic_usage"
            />
        </div>
    );
};

export default Home;
