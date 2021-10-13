import React from 'react';
import ViewRecourse from "../components/view_resource";
import SingleSelectionPre from "../components/examples/single/pre";
import SingleSelection from "../components/examples/single/fullExample";
import MultipleSelection from "../components/examples/multiple/fullExample";
import MultipleSelectionPre from "../components/examples/multiple/pre";
import NextPage from "../components/next";

const Examples = () => {
    return (
        <div className="my-3">
            <h2 className="">Examples</h2>
            <p className="">
                Is a example for any select type.
            </p>

            <div className="mt-5">
                <ViewRecourse title="Single Select">
                    <SingleSelectionPre/>
                </ViewRecourse>


                <SingleSelection/>

            </div>

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Multiple Select">
                    <MultipleSelectionPre/>
                </ViewRecourse>


                <MultipleSelection/>

            </div>

            <NextPage
                title="Props"
                url="/props"
            />
        </div>
    );
};

export default React.memo(Examples);
