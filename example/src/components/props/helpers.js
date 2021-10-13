import PropTypes from "prop-types";

export const getLabelPropItems = () => {
    return [
        {name: 'Name', value: 'label'},
        {name: 'Required', value: 'Yes'},
        {name: 'Type', value: 'string'},
    ]
}

export const getNamePropItems = () => {
    return [
        {name: 'Name', value: 'name'},
        {name: 'Required', value: 'Yes'},
        {name: 'Type', value: 'string'},
    ]
}

export const getTypePropItems = () => {
    return [
        {name: 'Name', value: 'type'},
        {name: 'Required', value: 'Yes'},
        {name: 'Type', value: "oneOf ['single', 'multiple', 'range']"},
    ]
}

export const getOptionsPropItems = () => {
    return [
        {name: 'Name', value: 'options'},
        {name: 'Required', value: 'Yes'},
        {name: 'Type', value: "arrayOf"},
        {
            name: 'Format', value: `
        <pre>
[
    {
        value: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired,
        checked: PropTypes.bool.isRequired,
    }
]</pre>
        `
        },
    ]
}

export const getOnChangePropItems = () => {
    return [
        {name: 'Name', value: 'onChange'},
        {name: 'Required', value: 'Yes'},
        {name: 'Type', value: "func"},
        {name: 'Format', value: `<pre>onChange={(data) => console.log(data)}</pre>`},
    ]
}

export const getClassNamePropItems = () => {
    return [
        {name: 'Name', value: 'className'},
        {name: 'Required', value: 'No'},
        {name: 'Type', value: "string"},
        {name: 'Format', value: `<pre>className="mt-2 mx-2"</pre>`},
    ]
}

export const getCountSelectedInCaptionPropItems = () => {
    return [
        {name: 'Name', value: 'countSelectedInCaption'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: '3'},
        {name: 'Type', value: "number"},
    ]
}

export const getDefaultSelectedRangePropItems = () => {
    return [
        {name: 'Name', value: 'defaultSelectedRange'},
        {name: 'Required', value: 'No'},
        {name: 'Type', value: "object"},
        {
            name: 'Format', value: `
        <pre>
{
    min : {
        value: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired,
    },
    max : {
        value: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired,
    }
}</pre>
        `
        },
    ]
}

export const getRtlPropItems = () => {
    return [
        {name: 'Name', value: 'rtl'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: 'false'},
        {name: 'Type', value: "boolean"},
    ]
}

export const getSearchablePropItems = () => {
    return [
        {name: 'Name', value: 'searchable'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: 'true'},
        {name: 'Type', value: "boolean"},
    ]
}

export const getCleanablePropItems = () => {
    return [
        {name: 'Name', value: 'cleanable'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: 'true'},
        {name: 'Type', value: "boolean"},
    ]
}

export const getLoadingPropItems = () => {
    return [
        {name: 'Name', value: 'loading'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: 'false'},
        {name: 'Type', value: "boolean"},
    ]
}

export const getDisabledPropItems = () => {
    return [
        {name: 'Name', value: 'disabled'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: 'false'},
        {name: 'Type', value: "boolean"},
    ]
}

export const getAutocompletePropItems = () => {
    return [
        {name: 'Name', value: 'autocomplete'},
        {name: 'Required', value: 'No'},
        {name: 'Default', value: 'false'},
        {name: 'Type', value: "boolean"},
    ]
}

export const getOnChangeAutocompletePropItems = () => {
    return [
        {name: 'Name', value: 'onChangeAutocomplete'},
        {name: 'Required', value: 'required if autocomplete is true'},
        {name: 'Type', value: "func"},
        {name: 'Format', value: `<pre>onChangeAutocomplete={(pattern) => console.log(pattern)}</pre>`},
    ]
}

export const getOnShowPropItems = () => {
    return [
        {name: 'Name', value: 'onShow'},
        {name: 'Required', value: 'No'},
        {name: 'Type', value: "func"},
        {name: 'Format', value: `<pre>onShow={(show) => console.log(show)}</pre>`},
    ]
}

export const getOnHidePropItems = () => {
    return [
        {name: 'Name', value: 'onHide'},
        {name: 'Required', value: 'No'},
        {name: 'Type', value: "func"},
        {name: 'Format', value: `<pre>onHide={(show) => console.log(show)}</pre>`},
    ]
}

export const getTranslatesPropItems = () => {
    return [
        {name: 'Name', value: 'translates'},
        {name: 'Required', value: 'No'},
        {name: 'Type', value: "object"},
        {name: 'Description', value: 'You can put any item you need to translate into the object and not all items need to be translated.'},
        {name: 'Example', value: `
        <span>To translate Search placeholder :</span> 
<br/>   
<br/>   
<pre>
translates = {
   placeholder: {
       search: "Search Options..."
   } 
}
</pre>
        `},
        {
            name: 'Default', value: `
<pre>
{
    label: {
        from: "from",
        to: "to"
    },
    placeholder: {
        min: "min",
        max: "max",
        search: "search"
    },
    button: {
        apply: "Apply",
        cancel: "cancel"
    },
    loading: 'Loading...',
    no_options: 'No Options'
}
</pre>`
        },
    ]
}