import React from 'react';

const SelectionDropdownRangeInputs = ({setRangeItemsPosition, selectedRange}) => {
    const {min, max} = selectedRange;
    let minValue = (min && typeof min === "object" && min.value) ? min.value : '';
    let maxValue = (max && typeof max === "object" && max.value) ? max.value : '';

    return (
        <div className="rs-selection-dropdown-range-inputs">
            <input type="tel"
                   value={minValue}
                   className="rs-selection__input"
                   placeholder="min"
                   onFocus={() => setRangeItemsPosition('start')}
            />

            <span className="rs-selection-dropdown-range-inputs__span">to</span>

            <input type="tel"
                   value={maxValue}
                   className="rs-selection__input"
                   placeholder="max"
                   onFocus={() => setRangeItemsPosition('end')}
            />
        </div>
    );
};

export default React.memo(SelectionDropdownRangeInputs);
