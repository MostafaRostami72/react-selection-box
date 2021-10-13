import React from 'react';
import BasicSingleExamplePre from "../components/examples/basic/single_pre";
import ViewRecourse from "../components/view_resource";
import BasicSingleExample from "../components/examples/basic/single";
import NextPage from "../components/next";

const BasicUsage = () => {
    return (
        <div className="my-3">
            <h2 className="">Basic Usage</h2>
            <p className="">
                A simple example to create a selection.
            </p>

            <div className="mt-5">
                <ViewRecourse title="Single Select">
                    <BasicSingleExamplePre/>
                </ViewRecourse>

                <div className="row">
                    <div className="col-lg-6">
                        <BasicSingleExample/>
                    </div>
                </div>
            </div>

            <p className="mt-5">
                See the next page (examples) for more details.
            </p>

            <NextPage
                title="Examples"
                url="/examples"
            />
        </div>
    );
};

export default BasicUsage;
