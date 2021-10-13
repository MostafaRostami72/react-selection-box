import React from 'react';
import ViewRecourse from "../components/view_resource";
import SingleSelectionPre from "../components/examples/single/pre";
import SingleSelection from "../components/examples/single/fullExample";
import MultipleSelection from "../components/examples/multiple/fullExample";
import MultipleSelectionPre from "../components/examples/multiple/pre";
import NextPage from "../components/next";
import RangeSelectionPre from "../components/examples/range/pre";
import RangeSelection from "../components/examples/range/fullExample";
import AsyncSingleSelection from "../components/examples/single/asyncExample";
import AsyncSingleSelectionPre from "../components/examples/single/asyncPre";
import AsyncMultipleSelectionPre from "../components/examples/single/asyncPre";
import AsyncMultipleSelection from "../components/examples/multiple/asyncExample";

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

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Range Select">
                    <RangeSelectionPre/>
                </ViewRecourse>


                <RangeSelection/>

            </div>

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Async (autocomplete) Single Select">
                    <AsyncSingleSelectionPre/>
                </ViewRecourse>


                <AsyncSingleSelection/>

            </div>

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Async (autocomplete) Multiple Select">
                    <AsyncMultipleSelectionPre/>
                </ViewRecourse>


                <AsyncMultipleSelection/>

            </div>

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Single Select with default option selected">
                    <SingleSelectionPre withDefault/>
                </ViewRecourse>


                <SingleSelection withDefault/>

            </div>

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Multiple Select with default options selected">
                    <MultipleSelectionPre withDefault/>
                </ViewRecourse>


                <MultipleSelection withDefault/>

            </div>

            <hr className="my-5"/>

            <div className="">
                <ViewRecourse title="Range Select with default range">
                    <RangeSelectionPre withDefault/>
                </ViewRecourse>


                <RangeSelection withDefault/>

            </div>

            <NextPage
                title="Props"
                url="/react-selection-box/props"
            />
        </div>
    );
};

export default React.memo(Examples);
