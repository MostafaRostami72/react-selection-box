import React from 'react';

const SelectionDropdownRangeInputs = ({setRangeItemsPosition, selectedRange, setSelectedRange,lang}) => {
    const {min, max} = selectedRange;
    let minValue = (min && typeof min === "object" && min.value) ? min.value : '';
    let maxValue = (max && typeof max === "object" && max.value) ? max.value : '';

    const handleChange = (e, type) => {
        const {value} = e.target;

        let newSelectedRange = JSON.parse(JSON.stringify(selectedRange));

        newSelectedRange[type] = {
            value: Number(value),
            label: value,
        };

        setSelectedRange(newSelectedRange);
    }

    return (
        <div className="rs-selection-dropdown-range-inputs">
            <input type="tel"
                   value={minValue}
                   className="rs-selection__input"
                   placeholder={lang.min}
                   onChange={(e) => handleChange(e, 'min')}
                   onFocus={() => setRangeItemsPosition('start')}
            />

            <span className="rs-selection-dropdown-range-inputs__span">{lang.to}</span>

            <input type="tel"
                   value={maxValue}
                   className="rs-selection__input"
                   placeholder={lang.max}
                   onChange={(e) => handleChange(e, 'max')}
                   onFocus={() => setRangeItemsPosition('end')}
            />
        </div>
    );
};

export default React.memo(SelectionDropdownRangeInputs);
