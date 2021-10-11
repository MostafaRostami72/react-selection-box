import React from 'react';

const SelectionDropdownFooter = ({selectionOptionsLength}) => {
    return (
        <div className="rs-selection-dropdown-footer">
            {
                selectionOptionsLength &&
                <button type="button" className="rs-selection-dropdown-footer__btn-submit">submit</button>
            }
        </div>
    );
};

export default React.memo(SelectionDropdownFooter);
