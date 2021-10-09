import React from 'react';
import ChevronDownIcon from "../atoms/icons/chevron-down";
import CloseIcon from "../atoms/icons/close";
import Caption from "./caption";

const Toggle = ({
                    label,
                    selectionType,
                    dropdownShow,
                    handleToggleDropdown,
                    cleanable,
                    countSelectedInCaption,
                    selectedItems,
                    handleClearSelection,
                    selectedRange
                }) => {

    return (
        <div className="rs-selection-toggle">
            <Caption
                countSelectedInCaption={countSelectedInCaption}
                selectionType={selectionType}
                selectedItems={selectedItems}
                label={label}
                onClick={() => handleToggleDropdown(!dropdownShow)}
                selectedRange={selectedRange}
            />

            {
                (cleanable && Array.isArray(selectedItems) && selectedItems.length) ?
                    <button className="rs-selection-clear-btn" onClick={handleClearSelection}>
                        <CloseIcon/>
                    </button>
                    :
                    <div className="rs-selection-toggle-icon">
                        <ChevronDownIcon/>
                    </div>
            }
        </div>
    );
};

export default React.memo(Toggle);
