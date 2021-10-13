import React from 'react';

const SelectionFeatures = ({features, setFeatures, type = 'single'}) => {

    const handleChange = (e, st) => {
        const {name, value, checked} = e.target;
        const fieldName = name.replaceAll(type,'')

        const newFeatures = JSON.parse(JSON.stringify(features))

        newFeatures[fieldName] = (fieldName === 'countSelectedInCaption') ? value : checked

        setFeatures(newFeatures);
    }

    return (
        <div className="mt-3 d-flex align-items-center">
            {
                features ?
                    Object.keys(features).map((feature, key) => {
                        if (type === 'multiple' && feature === 'countSelectedInCaption') {
                            return (
                                <div className="form-group border-left ml-2 pl-3">
                                    <label htmlFor={feature}>Show selected in caption</label>
                                    <input type="number" className="form-control" name={feature + type} id={feature + type} value={features[feature]} onChange={(e) => handleChange(e, type)}/>
                                </div>
                            )
                        } else if (feature !== 'countSelectedInCaption') {
                            return (
                                <div className="custom-control custom-checkbox mr-2" key={key}>
                                    <input type="checkbox" name={feature + type} className="custom-control-input" id={feature + type} onChange={(e) => handleChange(e, type)} checked={features[feature]}/>
                                    <label className="custom-control-label" htmlFor={feature + type}>{feature}</label>
                                </div>
                            )
                        }
                    })
                    : ''
            }
        </div>
    );
};

export default React.memo(SelectionFeatures);
