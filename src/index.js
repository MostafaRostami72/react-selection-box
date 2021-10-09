import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './assets/styles/styles.scss';
import Toggle from "./components/parts/toggle";
import SelectionDropdown from "./components/parts/dropdown";
import {IDefaultSelectedRange, ISelectionOption, ISelectionTypes} from "./components/mixins/custom_props_types";
import {array_unique} from "./components/mixins/arrays";
import {selectionTypes} from "./components/enums";


const Selection = ({
                       type = 'single',
                       options,
                       label,
                       rtl = false,
                       searchable = true,
                       cleanable = true,
                       countSelectedInCaption = 3,
                       defaultSelectedRange = {},
                   }) => {

    const selectionRef = useRef(null);

    // states
    const [dropdownShow, setDropdownShow] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedRange, setSelectedRange] = useState(defaultSelectedRange);
    const [selectionOptions, setSelectionOptions] = useState(options);
    const [rangeItemsPosition, setRangeItemsPosition] = useState('start');

    // useEffect
    useEffect(() => {
        if (options.length && type !== selectionTypes.RANGE) {
            let checked = [];

            for (let option of options) {
                if (option && option.checked) {
                    checked.push(option);
                }
            }

            setSelectedItems(checked);
        }
    }, [options]);

    useEffect(() => {
        if (type === selectionTypes.RANGE) {
            setRangeItemsPosition('start');
        }
    }, [dropdownShow]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    // func
    const handleToggleDropdown = (show) => {

        setDropdownShow(show);
    }

    function handleClickOutside(event) {
        if (selectionRef.current && !selectionRef.current.contains(event.target) && dropdownShow) {
            handleToggleDropdown(false);
        }
    }

    const handleClearSelection = () => {
        const newOptions = JSON.parse(JSON.stringify(selectionOptions));

        for (let option of newOptions) {
            option.checked = false;
        }

        setSelectionOptions(newOptions);

        setSelectedItems([]);
    }

    const handleClickOnOption = (value) => {
        switch (type) {
            case selectionTypes.SINGLE:
                if (value) {
                    const newOptions = JSON.parse(JSON.stringify(selectionOptions));
                    let selectedOption = [];

                    for (let option of newOptions) {
                        option.checked = (option.value === value);

                        if (option.value === value) {
                            selectedOption = [option];
                        }
                    }

                    setSelectionOptions(newOptions);

                    setSelectedItems(selectedOption);

                    handleToggleDropdown(false);
                }
                break;

            case selectionTypes.MULTIPLE:
                if (value) {
                    const newOptions = JSON.parse(JSON.stringify(selectionOptions));
                    let selectedOption = [];

                    for (let option of newOptions) {
                        if (option && option.value === value) {
                            option.checked = !option.checked;
                        }

                        if (option.checked) {
                            selectedOption.push(option)
                        }
                    }

                    setSelectionOptions(newOptions);

                    setSelectedItems(array_unique(selectedOption));
                }
                break;
            case selectionTypes.RANGE:
                const newOptions = JSON.parse(JSON.stringify(selectionOptions));

                let newSelectedRange = JSON.parse(JSON.stringify(selectedRange));

                let selectedOption = null;

                for (let option of newOptions) {
                    if (option && option.value === value) {
                        selectedOption = option;
                    }
                }

                const data = {
                    value: (selectedOption && typeof selectedOption === 'object') ? selectedOption.value : '',
                    label: (selectedOption && typeof selectedOption === 'object') ? selectedOption.label : '',
                };

                if (rangeItemsPosition === 'start') {
                    newSelectedRange.min = data;

                    setRangeItemsPosition('end');
                } else {
                    newSelectedRange.max = data;

                    const {min, max} = newSelectedRange;
                    if (min && min.value && max && max.value && min.value > max.value) {
                        newSelectedRange.min = max;
                        newSelectedRange.max = min;
                    }

                    handleToggleDropdown(false);
                }

                setSelectedRange(newSelectedRange);

                break;
        }
    }

    return (
        <div ref={selectionRef} className={"rs-selection-container " + (rtl ? 'rs-rtl-selection' : '')}>
            <Toggle
                label={label}
                selectionType={type}
                dropdownShow={dropdownShow}
                cleanable={cleanable}
                handleToggleDropdown={handleToggleDropdown}
                countSelectedInCaption={countSelectedInCaption}
                selectedItems={selectedItems}
                handleClearSelection={handleClearSelection}
                selectedRange={selectedRange}
            />

            <SelectionDropdown
                dropdownShow={dropdownShow}
                selectionType={type}
                searchable={searchable}
                selectionOptions={selectionOptions}
                handleClickOnOption={(value) => handleClickOnOption(value)}
                rangeItemsPosition={rangeItemsPosition}
                setRangeItemsPosition={setRangeItemsPosition}
                selectedRange={selectedRange}
            />
        </div>
    )
}

Selection.propTypes = {
    rtl: PropTypes.bool,
    options: PropTypes.arrayOf(ISelectionOption()).isRequired,
    type: ISelectionTypes(),
    searchable: PropTypes.bool,
    cleanable: PropTypes.bool,
    label: PropTypes.string.isRequired,
    countSelectedInCaption: PropTypes.number,
    defaultSelectedRange: IDefaultSelectedRange(),
}

export default React.memo(Selection);
