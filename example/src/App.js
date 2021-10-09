import React from 'react'

import Selection from 'react-selection-box'
import 'react-selection-box/dist/index.css'
import {countryListAlpha2} from "./countries";

const App = () => {

    const items = () => {
        let options = [];

        Object.keys(countryListAlpha2).forEach((key, i) => {
            options.push({
                value: key,
                label: countryListAlpha2[key],
                checked: (i === 0)
            })
        })

        return options;
    }

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

    const defaultSelectedRange = {
        min : {
            value: 1000,
            label : '$1K'
        },
        max : {
            value: 3000,
            label : '$3K'
        },
    }

    return (
        <div>
            <div className="box">
                <Selection
                    rtl={false}
                    type={'single'}
                    searchable={true}
                    options={items()}
                    label={"Select Countries"}
                />
            </div>

            <div className="box">
                <Selection
                    rtl={false}
                    type={'multiple'}
                    searchable={true}
                    options={items()}
                    label={"Select Countries"}
                />
            </div>

            <div className="box">
                <Selection
                    rtl={false}
                    type={'range'}
                    options={getPricesOptions()}
                    label={"Select Price"}
                    defaultSelectedRange={defaultSelectedRange}
                />
            </div>
        </div>
    )
}

export default App
