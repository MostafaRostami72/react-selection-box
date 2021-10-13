import React, {useState} from 'react';
import Selection from 'react-selection-box'
import {countryListAlpha} from "../../../countries";
import SelectionFeatures from "../features";

const MultipleSelection = () => {
    const [features2, setFeatures] = useState({
        searchable: true,
        cleanable: true,
        loading: false,
        disabled: false,
        rtl: false,
        countSelectedInCaption: 3
    });

    const {searchable, cleanable, loading, disabled, rtl, countSelectedInCaption} = features2;

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

    const handleChange = (value) => {
        console.log(value)
    }

    const translates = {
        label: {
            from: "from",
            to: "to"
        },
        placeholder: {
            search: "Search countries",
        },
        button: {
            apply: "Select",
        }
    }

    return (
        <div className="row mt-3">
            <div className="col-lg-6">

                <Selection
                    type="multiple"
                    name="countries"
                    label="Select Countries"
                    options={options()}
                    onChange={handleChange}
                    countSelectedInCaption={countSelectedInCaption}
                    searchable={searchable}
                    cleanable={cleanable}
                    loading={loading}
                    disabled={disabled}
                    rtl={rtl}
                    translates={translates}
                />
            </div>

            <div className="col-lg-12">
                <SelectionFeatures
                    features={features2}
                    setFeatures={setFeatures}
                    type="multiple"/>
            </div>
        </div>
    );
};

export default React.memo(MultipleSelection);
