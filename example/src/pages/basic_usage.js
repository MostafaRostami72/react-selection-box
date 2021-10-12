import React from 'react';
import BasicSingleExamplePre from "../components/examples/basic/single_pre";
import ViewRecourse from "../components/view_resource";
import BasicSingleExample from "../components/examples/basic/single";

const BasicUsage = () => {
    return (
        <div className="my-3">
            <h2 className="">Basic Usage</h2>

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
        </div>
    );
};

export default BasicUsage;
