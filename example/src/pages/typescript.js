import React from 'react';
import Code from "../components/code";

const TypescriptPage = () => {
    return (
        <div className="my-3">
            <h2 className="">Supports typescript</h2>
            <p className="">
                You can use <span className="bg-info px-1 font-weight-500">react-selection-box</span> in your typescript projects
            </p>

            <Code className="mt-3">
                {
                    `
import Selection, {
    IReactSelectionBoxProps,
    ITypes,
    IOptions,
    IOnChangeData,
    IDefaultSelectedRange,
    ITranslates
} from 'react-selection-box';
import 'react-selection-box/dist/index.css'
`
                }
            </Code>
        </div>
    );
};

export default React.memo(TypescriptPage);
