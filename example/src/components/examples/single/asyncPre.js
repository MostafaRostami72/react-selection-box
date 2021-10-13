import React from 'react';
import Code from "../../code";

const AsyncMultipleSelectionPre = () => {
    return (
        <Code>
            {
                `
import React, {useState} from 'react';
import Selection from 'react-selection-box'
import {countryListAlpha} from "../../../countries";

var setTime = undefined;

const AsyncMultipleSelection = () => {
    const [autoComplete, setAutoComplete] = useState({
        options: [],
        loading: false
    });

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
                searchList = options().filter((item) => {
                    return (item.label.toString().toLowerCase().search(pattern) !== -1);
                });
            }

            setAutoComplete({
                options: searchList,
                loading: false
            });
        }, 1000)

    }

    const handleChange = (value) => {
        console.log(value)
    }

    return (
        <div className="row mt-3">
            <div className="col-lg-6">

                <Selection
                    type="multiple"
                    name="countries"
                    label="Select Countries"
                    autocomplete={true}
                    options={autoComplete.options}
                    loading={autoComplete.loading}
                    onChange={handleChange}
                    onChangeAutocomplete={handleChangeAutocomplete}
                    translates={{
                        placeholder: {
                            search: "Search countries"
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default React.memo(AsyncMultipleSelection);
                `
            }
        </Code>
    );
};

export default React.memo(AsyncMultipleSelectionPre);
