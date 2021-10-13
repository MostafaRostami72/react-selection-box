import React, {useState} from 'react';
import Selection from 'react-selection-box'
import {countryListAlpha} from "../../../countries";
import SelectionFeatures from "../features";

const SingleSelection = ({withDefault = false}) => {
    const [features, setFeatures] = useState({
        searchable: true,
        cleanable: true,
        loading: false,
        disabled: false,
        rtl: false,
        countSelectedInCaption: 3
    });

    const {searchable, cleanable, loading, disabled, rtl} = features;

    const options = () => {
        let options = [];

        Object.keys(countryListAlpha).forEach((key, i) => {
            options.push({
                value: key,
                label: countryListAlpha[key],
                checked: (withDefault && key === 'CA')
            })
        })

        return options;
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
                    options={options()}
                    onChange={handleChange}
                    searchable={searchable}
                    cleanable={cleanable}
                    loading={loading}
                    disabled={disabled}
                    rtl={rtl}
                    translates={{
                        placeholder: {
                            search: "Search countries",
                        }
                    }}
                />
            </div>

            {
                !withDefault &&
                <div className="col-lg-12">
                    <SelectionFeatures
                        features={features}
                        setFeatures={setFeatures}
                    />
                </div>
            }
        </div>
    );
};

export default React.memo(SingleSelection);
