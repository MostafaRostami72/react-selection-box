import React from 'react';
import PropsItems from "../components/props";
import NextPage from "../components/next";

const PropsPage = () => {

    return (
        <div className="my-3">
            <h2 className="">Props</h2>

            <PropsItems/>

            <NextPage
                title="Styles"
                url="/react-selection-box/styles"
            />
        </div>
    );
};

export default PropsPage;
