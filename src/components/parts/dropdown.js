import React from 'react';
import SelectionDropdownSearch from "./dropdown_search";
import SelectionDropdownHeader from "./dropdown_header";
import SelectionDropdownItems from "./dropdown_items";
import SelectionDropdownFooter from "./dropdown_footer";
import {selectionTypes} from "../enums";
import SelectionDropdownRangeInputs from "./dropdown_range_inputs";


const SelectionDropdown = ({
                               dropdownShow,
                               selectionLabel,
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
                               handleToggleDropdown,
                               autocomplete,
                               loading,
                               lang
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

                <SelectionDropdownHeader
                    selectionLabel={selectionLabel}
                    handleToggleDropdown={handleToggleDropdown}
                />

                {
                    searchable && selectionType !== selectionTypes.RANGE ?
                        <SelectionDropdownSearch
                            handleSearchOptions={handleSearchOptions}
                            lang={lang}
                        />
                        :
                        (
                            selectionType === selectionTypes.RANGE ?
                                <SelectionDropdownRangeInputs
                                    setRangeItemsPosition={setRangeItemsPosition}
                                    selectedRange={selectedRange}
                                    setSelectedRange={setSelectedRange}
                                    lang={lang}
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
                    searchable={searchable}
                    loading={loading}
                    lang={lang}
                />

                {
                    selectionType !== selectionTypes.SINGLE &&
                    <SelectionDropdownFooter
                        selectionOptionsLength={(selectionOptions.length > 0)}
                        handleToggleDropdown={handleToggleDropdown}
                        lang={lang}
                    />
                }
            </div>
        </div>
    );
};

export default React.memo(SelectionDropdown);
