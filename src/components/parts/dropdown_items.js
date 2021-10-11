import React from 'react';
import SelectionDropdownItem from "./item";
import {selectionTypes} from "../enums";
import loading from "../atoms/loading";

const SelectionDropdownItems = ({selectionType, selectionName, selectionOptions, handleClickOnOption, rangeItemsPosition, autocomplete, loading}) => {
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
                autocomplete && !selectionOptions.length ?
                    <li className="rs-selection-dropdown-items__no-options">
                        {
                            loading ?
                                'Loading...'
                                :
                                'No options'
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
        prevProps.loading === nextProps.loading
    );
}

export default React.memo(SelectionDropdownItems, propsAreEqual);
