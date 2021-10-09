import React from 'react';
import SelectionDropdownSearch from "./dropdown_search";
import SelectionDropdownHeader from "./dropdown_header";
import SelectionDropdownItems from "./dropdown_items";
import SelectionDropdownFooter from "./dropdown_footer";
import {selectionTypes} from "../enums";
import SelectionDropdownRangeInputs from "./dropdown_range_inputs";


const SelectionDropdown = ({
                               dropdownShow,
                               selectionType,
                               searchable,
                               selectionOptions,
                               handleClickOnOption,
                               rangeItemsPosition,
                               setRangeItemsPosition,
                               selectedRange
                           }) => {

    const classes = ('rs-selection-dropdown--' + selectionType) + (dropdownShow ? ' rs-selection-dropdown--show ' : '');

    return (
        <div className={"rs-selection-dropdown " + classes}>
            <div className="rs-selection-dropdown__wrapper">

                <SelectionDropdownHeader/>

                {
                    searchable && selectionType !== selectionTypes.RANGE ?
                        <SelectionDropdownSearch/>
                        :
                        (
                            selectionType === selectionTypes.RANGE ?
                                <SelectionDropdownRangeInputs
                                    setRangeItemsPosition={setRangeItemsPosition}
                                    selectedRange={selectedRange}
                                />
                                : ''
                        )
                }

                <SelectionDropdownItems
                    selectionType={selectionType}
                    selectionOptions={selectionOptions}
                    handleClickOnOption={handleClickOnOption}
                    rangeItemsPosition={rangeItemsPosition}
                />

                {
                    selectionType !== selectionTypes.SINGLE &&
                    <SelectionDropdownFooter/>
                }
            </div>
        </div>
    );
};

export default React.memo(SelectionDropdown);
