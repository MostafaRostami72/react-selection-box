export const defaultTranslate = {
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

export const getTranslates = (translates) => {
    let from = translates?.label?.from ? translates.label.from : defaultTranslate.label.from;
    let to = translates?.label?.to ? translates.label.to : defaultTranslate.label.to;

    let min = translates?.placeholder?.min ? translates.placeholder.min : defaultTranslate.placeholder.min;
    let max = translates?.placeholder?.max ? translates.placeholder.max : defaultTranslate.placeholder.max;
    let search = translates?.placeholder?.search ? translates.placeholder.search : defaultTranslate.placeholder.search;

    let apply = translates?.button?.apply ? translates.button.apply : defaultTranslate.button.apply;
    let cancel = translates?.button?.cancel ? translates.button.cancel : defaultTranslate.button.cancel;

    let loading = translates?.loading ? translates.loading : defaultTranslate.loading;
    let no_options = translates?.no_options ? translates.no_options : defaultTranslate.no_options;

    return {
        from,
        to,
        min,
        max,
        search,
        apply,
        cancel,
        loading,
        no_options,
    }
}