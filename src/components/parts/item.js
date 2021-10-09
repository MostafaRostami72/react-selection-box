import React from 'react';

const SelectionDropdownItem = ({option, handleClickOnOption}) => {

    return (
        <li
            onClick={() => handleClickOnOption(option.value)}
            className={(option.checked ? 'rs-dropdown-items__checked' : '')}
        >{option.label}</li>
    );
};

export default React.memo(SelectionDropdownItem);
