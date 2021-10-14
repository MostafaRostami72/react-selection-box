import React from 'react';
import Code from "../components/code";

const Styles = () => {
    return (
        <div className="my-3">
            <h2 className="">Styles</h2>
            <p className="lead">
                You need to import the package styles in the main layout of your application or in the page you want.
            </p>

            <Code className="mt-3">
                {
                    `
import 'react-selection-box/dist/index.css'
`
                }
            </Code>

            <div className="mt-5">
                <h4 className="font-weight-bold">Customize</h4>
                <p className="">
                    To personalize styles, you need to add the package <span className="text-primary font-weight-bold">sass</span> files to your application assets folder and start personalization.
                </p>

                <a href="https://github.com/MostafaRostami72/react-selection-box/tree/main/src/assets/styles" target="_blank" className="mt-4">Go to sass files.</a>
            </div>
        </div>
    );
};

export default React.memo(Styles);
