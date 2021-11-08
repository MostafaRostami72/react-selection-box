import React from 'react';
import ArrowLeftIcon from "../atoms/icons/arrow-left";

const SelectionDropdownHeader = ({selectionLabel, handleClickHeaderBackArrow}) => {

    return (
        <div className="rs-selection-dropdown-header">
            <div className="rs-selection-dropdown-header__title">
                {selectionLabel}
            </div>

            <button className="rs-selection-dropdown-header__back" onClick={handleClickHeaderBackArrow}>
                <ArrowLeftIcon/>
            </button>
        </div>
    );
};

export default React.memo(SelectionDropdownHeader);
