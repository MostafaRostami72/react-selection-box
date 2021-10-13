import React from 'react';
import Code from "../../code";

const RangeSelectionPre = ({withDefault = false}) => {
    return (
        <Code>
            {
                `
import React from 'react';
import Selection from 'react-selection-box'

const RangeSelection = () => {

    const getPricesOptions = () => {
        let options = [];

        options.push({
            value: null,
            label: 'No matter',
            checked: false
        })

        for (let i = 1; i <= 20; i++) {
            options.push({
                value: i * 1000,
                label: '$' + i + 'K',
                checked: false
            })
        }

        return options;
    }

    const handleChange = (value) => {
        console.log(value)
    }

    ${
                    withDefault ?
                        `
    const defaultSelectedRange = {
        min: {
            value: 1000,
            label: '$1K'
        },
        max: {
            value: 3000,
            label: '$3K'
        },
    }
                        `
                    : ''
                }
    
    const translates = {
        label: {
            from: "from",
            to: "to"
        },
        placeholder: {
            min: "min",
            max: "max",
        },
        button: {
            apply: "Select",
        }
    }

    return (
        <div className="row mt-3">
            <div className="col-lg-6">

                <Selection
                    type="range"
                    name="prices"
                    label="Select Price"
                    options={getPricesOptions()}
                    onChange={handleChange}
                    translates={translates}
                    ${withDefault ? `defaultSelectedRange={defaultSelectedRange}` : ''}
                />

            </div>
        </div>
    );
};

export default RangeSelection;
                `
            }
        </Code>
    );
};

export default RangeSelectionPre;
