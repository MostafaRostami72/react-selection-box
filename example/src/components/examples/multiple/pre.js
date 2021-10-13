import React from 'react';
import Code from "../../code";

const MultipleSelectionPre = () => {
    return (
        <Code>
            {
                `
import React from 'react';
import Selection from 'react-selection-box'
import {countryListAlpha} from "../../../countries";

const MultipleSelection = () => {

    const options = () => {
        let options = [];

        Object.keys(countryListAlpha).forEach((key, i) => {
            options.push({
                value: key,
                label: countryListAlpha[key],
                checked: false
            })
        })

        return options;
    }

    const handleChange = (value) => {
        console.log(value)
    }

    const translates = {
        label: {
            from: "from",
            to: "to"
        },
        placeholder: {
            search: "Search countries",
        },
        button: {
            apply: "Select",
        }
    }
    
    return (
        <div>

            <Selection
                type="multiple"
                name="countries"
                label="Select Countries"
                options={options()}
                onChange={handleChange}
                countSelectedInCaption={3}
                translates={translates}
            />


        </div>
    );
};

export default MultipleSelection;
                `
            }
        </Code>
    );
};

export default MultipleSelectionPre;
