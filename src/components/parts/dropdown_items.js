import React from 'react';
import SelectionDropdownItem from "./item";
import {selectionTypes} from "../enums";

const SelectionDropdownItems = ({
                                    selectionType,
                                    selectionName,
                                    selectionOptions,
                                    handleClickOnOption,
                                    rangeItemsPosition,
                                    autocomplete,
                                    searchable,
                                    loading,
                                    lang
                                }) => {
    // classes
    // rs-has-footer-and-search
    //
    //

    let hasSearchInput = searchable;
    let hasFooter = true;

    let classes = ('rs-dropdown-items--' + selectionType);

    if (selectionType === selectionTypes.RANGE) {
        classes += ' rs-dropdown-items--range-' + rangeItemsPosition;
        hasSearchInput = true;
    }

    if (selectionType === selectionTypes.SINGLE) {
        hasFooter = false;
    }

    classes += (hasSearchInput && hasFooter) ? ' rs-has-footer-and-search ' :
        (
            hasSearchInput && !hasFooter ? ' rs-has-search-and-no-footer ' :
                (
                    hasFooter && !hasSearchInput ? ' rs-has-footer-and-no-search ' : ''
                )
        );

    return (
        <ul className={"rs-selection-dropdown-items " + classes}>

            {
                autocomplete && !selectionOptions.length ?
                    <li className="rs-selection-dropdown-items__no-options">
                        {
                            loading ?
                                lang.loading
                                :
                                lang.no_options
                        }
                    </li>
                    :
                    selectionOptions.map((option, key) =>
                        <SelectionDropdownItem
                            selectionName={selectionName}
                            option={option}
                            key={key}
                            handleClickOnOption={handleClickOnOption}
                        />
                    )
            }

        </ul>
    );
};

function propsAreEqual(prevProps, nextProps) {
    return (
        JSON.stringify(prevProps.selectionOptions) === JSON.stringify(nextProps.selectionOptions) &&
        prevProps.rangeItemsPosition === nextProps.rangeItemsPosition &&
        prevProps.autocomplete === nextProps.autocomplete &&
        prevProps.loading === nextProps.loading &&
        prevProps.searchable === nextProps.searchable
    );
}

export default React.memo(SelectionDropdownItems, propsAreEqual);
