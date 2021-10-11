import React from 'react';

const SelectionDropdownItem = ({selectionName, option, handleClickOnOption}) => {

    return (
        <li
            onClick={() => handleClickOnOption(option.value)}
            className={('rs-dropdown-item--' + selectionName + '-' + option.value) + (option.checked ? ' rs-dropdown-items__checked' : '')}
        >{option.label}</li>
    );
};

export default React.memo(SelectionDropdownItem);
