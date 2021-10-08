import React from 'react';
import SelectionDropdownSearch from "./dropdown_search";
import SelectionDropdownHeader from "./dropdown_header";
import SelectionDropdownItems from "./dropdown_items";
import SelectionDropdownFooter from "./dropdown_footer";

const SelectionDropdown = () => {
    // classes
    // rs-selection-dropdown--show
    // rs-selection-dropdown--{type} // multiple,range,single

    const classes = 'rs-selection-dropdown--show rs-selection-dropdown--multiple'

    return (
        <div className={"rs-selection-dropdown " + classes}>
            <div className="rs-selection-dropdown__wrapper">

                <SelectionDropdownHeader/>

                <SelectionDropdownSearch/>

                <SelectionDropdownItems/>

                <SelectionDropdownFooter/>
            </div>
        </div>
    );
};

export default SelectionDropdown;
