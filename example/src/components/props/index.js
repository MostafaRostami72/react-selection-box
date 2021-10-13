import React from 'react';
import {
    getLabelPropItems,
    getNamePropItems,
    getTypePropItems,
    getOptionsPropItems,
    getOnChangePropItems,
    getClassNamePropItems,
    getCountSelectedInCaptionPropItems,
    getDefaultSelectedRangePropItems,
    getRtlPropItems,
    getSearchablePropItems,
    getCleanablePropItems,
    getLoadingPropItems,
    getDisabledPropItems,
    getAutocompletePropItems,
    getOnChangeAutocompletePropItems,
    getOnShowPropItems,
    getOnHidePropItems,
    getTranslatesPropItems,
} from './helpers'

const PropsItems = () => {

    const items = [
        getLabelPropItems(),
        getNamePropItems(),
        getTypePropItems(),
        getOptionsPropItems(),
        getOnChangePropItems(),
        getClassNamePropItems(),
        getCountSelectedInCaptionPropItems(),
        getDefaultSelectedRangePropItems(),
        getRtlPropItems(),
        getSearchablePropItems(),
        getCleanablePropItems(),
        getLoadingPropItems(),
        getDisabledPropItems(),
        getAutocompletePropItems(),
        getOnChangeAutocompletePropItems(),
        getOnShowPropItems(),
        getOnHidePropItems(),
        getTranslatesPropItems(),
    ];
    console.log(items)
    return (
        <div>
            {
                items.map((item, key) =>
                    <div className="props-items" key={key}>
                        {
                            item.map((prop, key) =>
                                <div className="props-features" key={key}>
                                    <div className="props-features-name">{prop.name}</div>
                                    <div className="props-features-value" dangerouslySetInnerHTML={{__html:prop.value}}/>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default React.memo(PropsItems);
