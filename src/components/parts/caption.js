import React from 'react';
import {selectionTypes} from "../enums";

const Caption = ({countSelectedInCaption, selectionType, label, selectedItems = [], onClick, selectedRange}) => {

    const getCaption = () => {
        let caption = label;

        if (Array.isArray(selectedItems) && selectedItems.length && selectionType !== selectionTypes.RANGE) {
            let captions = [];

            for (let option of selectedItems) {
                if (option && option.checked) {
                    captions.push(option.label);
                }
            }

            if (captions.length) {
                if (captions.length > countSelectedInCaption) {
                    caption = caption + ' (' + captions.length + ')';
                } else {
                    caption = captions.join('، ');
                }
            }
        } else if (selectionType === selectionTypes.RANGE && selectedRange) {
            const {min, max} = selectedRange;

            if ((min && typeof min === "object" && min.value) || (max && typeof max === "object" && max.value)) {
                caption = '';
            }

            if (min && typeof min === "object" && min.label && min.value) {
                caption += 'from ';
                caption += min.label;
            }

            if (max && typeof max === "object" && max.label && max.value) {
                caption += ' to ';
                caption += max.label;
            }
        }

        return caption;
    }

    return (
        <div onClick={onClick} className="rs-selection-caption rs-clearable-caption">
            {getCaption()}
        </div>
    );
};

export default React.memo(Caption);
