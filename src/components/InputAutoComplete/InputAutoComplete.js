import React from 'react';
import {InputAutoComplete} from "./InputAutoComplete.styles";

const SearchInput = () => {
    return (
        <InputAutoComplete className="input__autocomplete" id="input" placeholder="Choose technology e.g. React"  />
    );
};

export default SearchInput;
