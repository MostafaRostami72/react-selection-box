import React, {useState} from 'react';
import Selection from 'react-selection-box'
import {countryListAlpha} from "../../../countries";

var setTime = undefined;

const AsyncSingleSelection = () => {
    const [autoComplete, setAutoComplete] = useState({
        options: [],
        loading: false,
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
                    type="single"
                    name="countries"
                    label="Select Countries"
                    options={autoComplete.options}
                    loading={autoComplete.loading}
                    autocomplete={true}
                    onChange={handleChange}
                    onChangeAutocomplete={handleChangeAutocomplete}
                    translates={{
                        placeholder: {
                            search: "Search countries",
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default React.memo(AsyncSingleSelection);
