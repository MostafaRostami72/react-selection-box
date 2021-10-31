import * as React from 'react';

export type ITypes = 'single' | 'multiple' | 'range'

export interface IOptions {
    value: number | string
    label: number | string
    checked: boolean
}

interface IValueAndLabelShape {
    value: number | string
    label: number | string
}

export interface IDefaultSelectedRange {
    min?: IValueAndLabelShape,
    max?: IValueAndLabelShape
}

export interface ITranslates {
    label?: {
        from: string,
        to: string
    },
    placeholder?: {
        min: string,
        max: string,
        search: string,
    },
    button?: {
        apply: string,
        cancel: string,
    },
    loading?: string,
    no_options?: string
}

export interface IReactSelectionBoxProps {
    children?: React.ReactNode;

    // select label
    label: string;
    // select tag name
    name: string;
    // selection type
    type: ITypes;
    //selection options
    options: IOptions[];
    // selection onChange
    onChange: (data: {} | null) => void
    // select container class name
    className?: string
    // in multiple type, you can select how many items can be displayed in the caption
    // default = 3
    countSelectedInCaption?: number
    // rtl
    // default false
    rtl?: boolean
    // searchable
    // default true
    searchable?: boolean
    // cleanable
    // default true
    cleanable?: boolean
    // loading
    // default false
    loading?: boolean
    // disable selection
    // default false
    disabled?: boolean
    // autocomplete
    autocomplete?: boolean
    // required if autocomplete is true
    onChangeAutocomplete?: (pattern: string | null) => void
    // when selection dropdown opened
    onShow?: (show: boolean) => void
    // when selection dropdown closed
    onHide?: (show: boolean) => void
    // in rang selection, you can add default selected rang
    defaultSelectedRange?: IDefaultSelectedRange
    // selection translate
    translates?: ITranslates
}

// ReactSelectionBox component is the default export

export default function Selection(props: IReactSelectionBoxProps)