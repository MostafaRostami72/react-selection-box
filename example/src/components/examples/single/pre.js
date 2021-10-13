import React from 'react';
import Code from "../../code";

const SingleSelectionPre = ({withDefault=false}) => {
    return (
        <Code>
            {
                `
import React from 'react';
import Selection from 'react-selection-box'
import {countryListAlpha} from "../../../countries";

const SingleSelection = () => {

    const options = () => {
        let options = [];

        Object.keys(countryListAlpha).forEach((key, i) => {
            options.push({
                value: key,
                label: countryListAlpha[key],
                checked: ${withDefault ? '(key === \'CA\') // selected default Canada' : 'false'}
            })
        })

        return options;
    }

    const handleChange = (value) => {
        console.log(value)
    }

    return (
        <div>

            <Selection
                type="single"
                name="countries"
                label="Select Countries"
                options={options()}
                onChange={handleChange}
                translates={{
                    placeholder: {
                        search: "Search countries"
                    }
                }}
            />


        </div>
    );
};

export default SingleSelection;
                `
            }
        </Code>
    );
};

export default React.memo(SingleSelectionPre);
