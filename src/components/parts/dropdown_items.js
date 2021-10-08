import React from 'react';

const SelectionDropdownItems = () => {
    // classes
    // is-footer-and-search
    // is-footer-and-no-search
    // no-footer-and-is-search
    // rs-dropdown-items--{type}
    // rs-dropdown-items--range-end (if type is range and click other side)

    const classes = "is-footer-and-search rs-dropdown-items--multiple ";

    // li classes
    // rs-dropdown-items__checked

    return (
        <ul className={"rs-selection-dropdown-items " + classes}>

            {
                [...Array(20)].map((i, k) =>
                    <li className={((k === 1 || k === 3) ? 'rs-dropdown-items__checked' : '') } key={k}>option {k + 1}</li>
                )
            }

        </ul>
    );
};

export default React.memo(SelectionDropdownItems);
