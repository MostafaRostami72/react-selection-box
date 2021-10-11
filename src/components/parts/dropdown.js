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
                               selectionName,
                               searchable,
                               selectionOptions,
                               handleClickOnOption,
                               rangeItemsPosition,
                               setRangeItemsPosition,
                               selectedRange,
                               setSelectedRange,
                               selectionRef,
                               onChangeAutocomplete,
                               autocomplete,
                               loading
                           }) => {

    const handleSearchOptions = (pattern) => {
        const dropdownLists = selectionRef.current.querySelector('.rs-selection-dropdown-items');
        const allItems = dropdownLists.querySelectorAll('li');

        if (autocomplete && typeof onChangeAutocomplete === "function") {
            onChangeAutocomplete(pattern);
        } else if (pattern && pattern !== '') {
            for (let li of allItems) {
                li.style.display = 'none';
            }

            let searchList = selectionOptions.filter((item) => {
                return (item.label.toString().toLowerCase().search(pattern) !== -1);
            });

            for (let item of searchList) {
                const itemClassName = ('rs-dropdown-item--' + selectionName + '-' + item.value);
                const li = dropdownLists.querySelector('li.' + itemClassName);

                if (li) {
                    li.style.display = 'block';
                }
            }
        } else {
            for (let li of allItems) {
                li.style.display = 'block';
            }
        }
    }

    const classes = ('rs-selection-dropdown--' + selectionType) + (dropdownShow ? ' rs-selection-dropdown--show ' : '');

    return (
        <div className={"rs-selection-dropdown " + classes}>
            <div className="rs-selection-dropdown__wrapper">

                <SelectionDropdownHeader/>

                {
                    searchable && selectionType !== selectionTypes.RANGE ?
                        <SelectionDropdownSearch
                            handleSearchOptions={handleSearchOptions}
                        />
                        :
                        (
                            selectionType === selectionTypes.RANGE ?
                                <SelectionDropdownRangeInputs
                                    setRangeItemsPosition={setRangeItemsPosition}
                                    selectedRange={selectedRange}
                                    setSelectedRange={setSelectedRange}
                                />
                                : ''
                        )
                }

                <SelectionDropdownItems
                    selectionType={selectionType}
                    selectionName={selectionName}
                    selectionOptions={selectionOptions}
                    handleClickOnOption={handleClickOnOption}
                    rangeItemsPosition={rangeItemsPosition}
                    autocomplete={autocomplete}
                    loading={loading}
                />

                {
                    selectionType !== selectionTypes.SINGLE &&
                    <SelectionDropdownFooter
                        selectionOptionsLength={(selectionOptions.length > 0)}
                    />
                }
            </div>
        </div>
    );
};

export default React.memo(SelectionDropdown);
