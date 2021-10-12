import React from 'react';

const SelectionDropdownFooter = ({selectionOptionsLength, lang}) => {
    return (
        <div className="rs-selection-dropdown-footer">
            {
                selectionOptionsLength &&
                <button type="button" className="rs-selection-dropdown-footer__btn-submit">{lang.apply}</button>
            }
        </div>
    );
};

export default React.memo(SelectionDropdownFooter);
