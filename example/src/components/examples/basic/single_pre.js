import React from 'react';
import Code from "../../code";

const BasicSingleExamplePre = () => {
    return (
        <Code>
            {
                `
import React from 'react';
import Selection from 'react-selection-box'
import 'react-selection-box/dist/index.css'

const MyComponent = () => {

    const handleChange = (value) => {
        console.log(value)
    }

    const options = [
        {label: 'Option 1', value: 'option_1', checked: false},
        {label: 'Option 2', value: 'option_2', checked: false},
        {label: 'Option 3', value: 'option_3', checked: false}
    ]

    return (
        <div>

            <Selection
                name="counties"
                label="Select Counties"
                className=""
                options={options}
                onChange={handleChange}
            />

        </div>
    );
};

export default MyComponent;
                `
            }
        </Code>
    );
};

export default React.memo(BasicSingleExamplePre);
