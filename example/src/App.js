import React, {useState} from 'react'

import Selection from 'react-selection-box'
import 'react-selection-box/dist/index.css'
import {countryListAlpha2} from "./countries";

var setTime = undefined;

const App = () => {
    const [autoComplete, setAutoComplete] = useState({
        options: [],
        loading: false,
    });

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
        min: {
            value: 1000,
            label: '$1K'
        },
        max: {
            value: 3000,
            label: '$3K'
        },
    }

    const handleChangeAutocomplete = (pattern) => {
        setAutoComplete({
            options: [],
            loading: true
        });

        if (setTime) {
            clearTimeout(setTime)
        }

        setTime = setTimeout(function () {
            let searchList = [];

            if (pattern) {
                searchList = items().filter((item) => {
                    return (item.label.toString().toLowerCase().search(pattern) !== -1);
                });
            }

            setAutoComplete({
                options: searchList,
                loading: false
            });
        }, 1000)

    }

    return (
        <div>
            <div className="box">
                <Selection
                    rtl={false}
                    type={'single'}
                    name={'countries1'}
                    searchable={true}
                    options={items()}
                    label={"Select Countries"}
                    onChange={(data) => console.log(data)}
                />
            </div>

            <div className="box">
                <Selection
                    rtl={false}
                    type={'multiple'}
                    name={'countries2'}
                    searchable={true}
                    options={items()}
                    label={"Select Countries"}
                    onChange={(data) => console.log(data)}
                />
            </div>

            <div className="box">
                <Selection
                    rtl={false}
                    type={'range'}
                    name={'prices'}
                    options={getPricesOptions()}
                    label={"Select Price"}
                    defaultSelectedRange={defaultSelectedRange}
                    onChange={(data) => console.log(data)}
                />
            </div>

            <div style={{clear: 'both'}}></div>

            <div className="box">
                <Selection
                    rtl={false}
                    type={'multiple'}
                    name={'auto'}
                    options={autoComplete.options}
                    label={"Auto complete"}
                    autocomplete={true}
                    loading={autoComplete.loading}
                    onChange={(data) => console.log(data)}
                    onChangeAutocomplete={handleChangeAutocomplete}
                />
            </div>
        </div>
    )
}

export default App
