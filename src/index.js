import React from 'react';
import './assets/styles/styles.scss';
import Toggle from "./components/parts/toggle";
import Caption from "./components/parts/caption";
import SelectionDropdown from "./components/parts/dropdown";


const Selection = () => {
    const rtl = false;

    return (
        <div className={"rs-selection-container " + (rtl ? 'rs-rtl-selection' : '')}>
            <Toggle>
                <Caption/>
            </Toggle>

            <SelectionDropdown/>
        </div>
    )
}

export default React.memo(Selection);
