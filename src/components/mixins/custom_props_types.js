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

export const ITranslates = () => {
    return PropTypes.shape({
        label: PropTypes.shape({
            from: PropTypes.string,
            to: PropTypes.string
        }),
        placeholder: PropTypes.shape({
            min: PropTypes.string,
            max: PropTypes.string,
            search: PropTypes.string,
        }),
        button: PropTypes.shape({
            apply: PropTypes.string,
            cancel: PropTypes.string,
        })
    })
}