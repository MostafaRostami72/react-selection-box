# react-selection-box

> A beautiful and responsive Select Input control for ReactJS with singleselect, multiselect, rangeselect and autocomplete (async) support.

[![NPM](https://img.shields.io/npm/v/react-selection-box.svg)](https://www.npmjs.com/package/react-selection-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Full Document and Demo
-   [Document And Demo](https://mostafarostami72.github.io/react-selection-box/)


## Install

```bash
npm install --save react-selection-box
```

## Usage

```jsx
import React, { Component } from 'react'

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
```

## Support
We are glad you choose this package. If this package is useful for you, please give us a star.

## License

MIT © [MostafaRostami72](https://github.com/MostafaRostami72)
