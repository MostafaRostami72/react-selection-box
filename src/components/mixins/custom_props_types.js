import PropTypes from 'prop-types';
import {selectionTypes} from "../enums";

export const ISelectionTypes = () => {
    return PropTypes.oneOf(Object.values(selectionTypes));
}

export const ISelectionOption = () => {
    return PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.any.isRequired,
        checked: PropTypes.bool.isRequired,
    }).isRequired
}

const IValueAnsLabelShape = () => {
    return PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired,
    })
}

export const IDefaultSelectedRange = () => {
    return PropTypes.shape({
        min: IValueAnsLabelShape(),
        max: IValueAnsLabelShape(),
    })
}