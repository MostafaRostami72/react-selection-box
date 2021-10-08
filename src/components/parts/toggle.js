import React from 'react';
import ChevronDownIcon from "../atoms/icons/chevron-down";
import CloseIcon from "../atoms/icons/close";

const Toggle = ({children}) => {
    return (
        <div className="rs-selection-toggle">
            {children}

            <div className="rs-selection-toggle-icon">
                <ChevronDownIcon/>
            </div>

            {
                1==2 &&
                <button className="rs-selection-clear-btn">
                    <CloseIcon/>
                </button>
            }
        </div>
    );
};

export default React.memo(Toggle);
