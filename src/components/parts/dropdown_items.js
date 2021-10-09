import React from 'react';
import SelectionDropdownItem from "./item";
import {selectionTypes} from "../enums";

const SelectionDropdownItems = ({selectionType, selectionOptions, handleClickOnOption, rangeItemsPosition}) => {
    // classes
    // is-footer-and-search
    // is-footer-and-no-search
    // no-footer-and-is-search

    let classes = ('rs-dropdown-items--' + selectionType) + " is-footer-and-search ";

    if (selectionType === selectionTypes.RANGE) {
        classes += ' rs-dropdown-items--range-' + rangeItemsPosition;
    }

    return (
        <ul className={"rs-selection-dropdown-items " + classes}>

            {
                selectionOptions.map((option, key) =>
                    <SelectionDropdownItem
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
    return (JSON.stringify(prevProps.selectionOptions) === JSON.stringify(nextProps.selectionOptions) && prevProps.rangeItemsPosition === nextProps.rangeItemsPosition);
}

export default React.memo(SelectionDropdownItems, propsAreEqual);
