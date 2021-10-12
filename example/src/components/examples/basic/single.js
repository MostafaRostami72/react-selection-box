import React from 'react';
import Selection from 'react-selection-box'


const BasicSingleExample = () => {

    const handleChange = (value) => {
        console.log(value)
    }

    const options = [
        {label: 'Option 1', value: 'option_1', checked: false},
        {label: 'Option 2', value: 'option_2', checked: false},
        {label: 'Option 3', value: 'option_3', checked: false},
    ]

    return (
        <div>

            <Selection
                name="counties"
                label="Select One Option"
                className="mt-3"
                options={options}
                onChange={handleChange}
            />

        </div>
    );
};

export default BasicSingleExample;
