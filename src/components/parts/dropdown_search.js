import React from 'react';
import CloseIcon from "../atoms/icons/close";

const SelectionDropdownSearch = () => {

    return (
        <div className="rs-selection-dropdown-search">

            <div className="rs-selection-dropdown-search__box">
                <input
                    type="text"
                    className="rs-selection-dropdown-search__input"
                    placeholder="search"
                />

                <button className="rs-selection-dropdown-search__clear">
                    <CloseIcon/>
                </button>
            </div>

        </div>
    );
};

export default React.memo(SelectionDropdownSearch);
