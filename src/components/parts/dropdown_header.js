import React from 'react';
import ArrowLeftIcon from "../atoms/icons/arrow-left";

const SelectionDropdownHeader = () => {

    return (
        <div className="rs-selection-dropdown-header">
            <div className="rs-selection-dropdown-header__title">
                header title
            </div>

            <button className="rs-selection-dropdown-header__back">
                <ArrowLeftIcon/>
            </button>
        </div>
    );
};

export default React.memo(SelectionDropdownHeader);
