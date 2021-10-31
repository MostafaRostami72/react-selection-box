# react-selection-box

> A beautiful and responsive Select Input control for ReactJS with singleselect, multiselect, rangeselect and autocomplete (async) support.

[![NPM](https://img.shields.io/npm/v/react-selection-box.svg)](https://www.npmjs.com/package/react-selection-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Full Document and Demo
-   [Document And Demo](https://mostafarostami72.github.io/react-selection-box/)

### ** Supports typescript **

## Install

```bash
npm install react-selection-box
```

## Types
With this package, you can create select input with the following types.

* Single select
* Multiple select
* Range select
* Async select (autocomplete)

See the document page for more examples.

## Some features
* Searchable
* Cleanable
* Loading
* Disabled
* RTL
* Translates
* Show Label
* ...

Please see the document page for more examples.

## Async (autocomplete)
Easily create an autocomplete selection to  get values from the server by typing and list them for the user.

Please see the [document](https://mostafarostami72.github.io/react-selection-box) page and go to examples.

## Usage

```jsx
import React  from 'react'

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
                type="single" // single, muliple, renge
                name="counties"
                label="Select Counties"
                className=""
                options={options}
                onChange={handleChange}
                searchable={true}
                cleanable={true}
                loading={false}
                disabled={false}
                rtl={false}
                translates={{
                    placeholder: {
                        search: "Search countries"
                    }
                }}
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
