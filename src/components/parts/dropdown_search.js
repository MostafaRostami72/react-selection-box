import React, {useState} from 'react';
import CloseIcon from "../atoms/icons/close";

const SelectionDropdownSearch = ({handleSearchOptions,lang}) => {
    const [search, setSearch] = useState('');

    const handleSearchInput = (e) => {
        const {value} = e.target;

        setSearch(value ?? '');

        const pattern = value ? value.toString().toLowerCase() : '';
        handleSearchOptions(pattern);
    }

    return (
        <div className="rs-selection-dropdown-search">

            <div className="rs-selection-dropdown-search__box">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchInput}
                    className="rs-selection-dropdown-search__input rs-selection__input"
                    placeholder={lang.search}
                />

                {
                    search && search !== '' ?
                        <button onClick={handleSearchInput} className="rs-selection-dropdown-search__clear">
                            <CloseIcon/>
                        </button>
                        : ''
                }
            </div>

        </div>
    );
};

export default React.memo(SelectionDropdownSearch);
