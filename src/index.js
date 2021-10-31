import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './assets/styles/styles.scss';
import Toggle from "./components/parts/toggle";
import SelectionDropdown from "./components/parts/dropdown";
import {IDefaultSelectedRange, ISelectionOption, ISelectionTypes, ITranslates} from "./components/mixins/custom_props_types";
import {array_unique} from "./components/mixins/arrays";
import {selectionTypes} from "./components/enums";
import {getTranslates} from "./components/mixins/translate";


const Selection = ({
                       type = 'single',
                       options,
                       label,
                       name,
                       onChange,
                       className,
                       rtl = false,
                       searchable = true,
                       cleanable = true,
                       autocomplete = false,
                       onChangeAutocomplete,
                       loading = false,
                       disabled = false,
                       countSelectedInCaption = 3,
                       defaultSelectedRange = {},
                       translates = {},
                       onShow,
                       onHide
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
        setSelectionOptions(options);

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
    const handleToggleDropdown = (show, value = null) => {

        if (!show && !value && type === selectionTypes.RANGE) {
            let newSelectedRange = JSON.parse(JSON.stringify(selectedRange));

            newSelectedRange = compareMinAndMax(newSelectedRange);

            setSelectedRange(newSelectedRange);

            value = newSelectedRange;
        }

        if (!show && onChange && typeof onChange === 'function') {
            let result = null;

            switch (type) {
                case selectionTypes.SINGLE:
                    result = value ? {value: value} : null;
                    break;

                case selectionTypes.MULTIPLE:
                    let multipleValue = [];

                    if (selectedItems && selectedItems.length) {
                        for (let option of selectedItems) {
                            multipleValue.push(option.value);
                        }
                    }

                    result = {value: multipleValue};
                    break;

                case selectionTypes.RANGE:

                    const {min, max} = value ? value : selectedRange;

                    result = {
                        min: min ? min.value : null,
                        max: max ? max.value : null,
                    };
                    break;
            }

            onChange(result);
        }

        if (show && typeof onShow === 'function') {
            onShow(show)
        }

        if (!show && typeof onHide === 'function') {
            onHide(show)
        }

        setDropdownShow(show);
    }

    function handleClickOutside(event) {
        if (selectionRef.current && !selectionRef.current.contains(event.target) && dropdownShow) {
            let value = null;

            switch (type) {
                case selectionTypes.SINGLE:
                    if (selectedItems && selectedItems.length) {
                        value = selectedItems[0]?.value
                    }
            }

            handleToggleDropdown(false, value);
        }
    }

    const handleClearSelection = () => {
        const newOptions = JSON.parse(JSON.stringify(selectionOptions));

        for (let option of newOptions) {
            option.checked = false;
        }

        setSelectionOptions(newOptions);

        setSelectedItems([]);

        if (!dropdownShow && onChange && typeof onChange === 'function') {
            let result = null;

            switch (type) {
                case selectionTypes.SINGLE:
                    result = null;
                    break;

                case selectionTypes.MULTIPLE:
                    result = {value: []};
                    break;

                case selectionTypes.RANGE:
                    result = {
                        min: null,
                        max: null,
                    };
                    break;
            }

            onChange(result);
        }
    }

    const handleClickOnOption = (value) => {
        switch (type) {
            case selectionTypes.SINGLE:

                const newOptions = JSON.parse(JSON.stringify(selectionOptions));
                let selectedOption = null;

                for (let option of newOptions) {
                    option.checked = (option.value === value);

                    if (option.value === value) {
                        selectedOption = option;
                    }
                }

                setSelectionOptions(newOptions);

                setSelectedItems(selectedOption ? [selectedOption] : []);

                handleToggleDropdown(false, selectedOption ? selectedOption.value : '');

                break;

            case selectionTypes.MULTIPLE:

                const newOptions2 = JSON.parse(JSON.stringify(selectionOptions));
                let selectedOption2 = [];

                for (let option of newOptions2) {
                    if (option && option.value === value) {
                        option.checked = !option.checked;
                    }

                    if (option.checked) {
                        selectedOption2.push(option)
                    }
                }

                setSelectionOptions(newOptions2);

                setSelectedItems(array_unique(selectedOption2));
                break;
            case selectionTypes.RANGE:
                const newOptions3 = JSON.parse(JSON.stringify(selectionOptions));

                let newSelectedRange = JSON.parse(JSON.stringify(selectedRange));

                let selectedOption3 = null;

                for (let option of newOptions3) {
                    if (option && option.value === value) {
                        selectedOption3 = option;
                    }
                }

                const data = {
                    value: (selectedOption3 && typeof selectedOption3 === 'object') ? selectedOption3.value : '',
                    label: (selectedOption3 && typeof selectedOption3 === 'object') ? selectedOption3.label : '',
                };

                if (rangeItemsPosition === 'start') {
                    newSelectedRange.min = data;

                    setRangeItemsPosition('end');
                } else {
                    newSelectedRange.max = data;

                    newSelectedRange = compareMinAndMax(newSelectedRange);

                    handleToggleDropdown(false, newSelectedRange);
                }

                setSelectedRange(newSelectedRange);

                break;
        }
    }

    const compareMinAndMax = (value) => {
        const {min, max} = value;

        if (min && Number(min.value) && max && Number(max.value) && Number(min.value) > Number(max.value)) {
            value.min = max;
            value.max = min;
        }

        return value;
    }

    const lang = getTranslates(translates);

    return (
        <div ref={selectionRef} className={"rs-selection-container " + (rtl ? 'rs-rtl-selection ' : '') + (className ?? '')}>
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
                loading={loading}
                disabled={disabled}
                lang={lang}
            />

            <SelectionDropdown
                dropdownShow={dropdownShow}
                selectionLabel={label}
                selectionType={type}
                selectionName={name}
                searchable={searchable}
                selectionOptions={selectionOptions}
                handleClickOnOption={(value) => handleClickOnOption(value)}
                handleToggleDropdown={handleToggleDropdown}
                rangeItemsPosition={rangeItemsPosition}
                setRangeItemsPosition={setRangeItemsPosition}
                selectedRange={selectedRange}
                setSelectedRange={setSelectedRange}
                selectionRef={selectionRef}
                onChangeAutocomplete={onChangeAutocomplete}
                autocomplete={autocomplete}
                loading={loading}
                lang={lang}
            />
        </div>
    )
}

Selection.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: ISelectionTypes().isRequired,
    options: PropTypes.arrayOf(ISelectionOption()).isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    countSelectedInCaption: PropTypes.number,
    rtl: PropTypes.bool,
    searchable: PropTypes.bool,
    cleanable: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    autocomplete: PropTypes.bool,
    onChangeAutocomplete: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    defaultSelectedRange: IDefaultSelectedRange(),
    translates: ITranslates()
}

export default React.memo(Selection);
