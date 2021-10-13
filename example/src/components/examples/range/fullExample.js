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
                />

            </div>
        </div>
    );
};

export default RangeSelection;
