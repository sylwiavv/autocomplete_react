import React, { useState } from 'react';
import { Wrapper } from "components/ResultList/ResultList.styles";
import ResultListItem from "../ResultListItem/ResultListItem";
import { technologies } from "data/technologies";
import  { escapeRegExp } from "helpers/helpers"
let resultsListItems = [];

const ResultList = () => {
    const [resultItemsArrayState, setResultItemsArrayState] = useState([]);
    const resultListAutoComplite = document.querySelector('.selected-list__autocomplete');

    const handleInputOnChange = (e) => {
        let inputValue = e.target.value;
        resultsListItems.push(inputValue);

        technologies.forEach((technology) => {
            const technologyItem = technology.toLowerCase().replace(/\s/g, "");
            const matchItems = technologyItem.match(escapeRegExp(inputValue.toLowerCase().replace(/\s/g, '')));
            // If element does not match then match method returns null
            if (matchItems !== null) {
                resultsListItems.push(technology);
            }
        });
        console.log(resultsListItems);
        setResultItemsArrayState(...resultItemsArrayState, resultsListItems);
    };

    React.useEffect(() => {
        const inputAutoComplete = document.querySelector('.input__autocomplete');
        inputAutoComplete.addEventListener("input", handleInputOnChange);
        // cleanup this component
        return () => {
            inputAutoComplete.removeEventListener("input", handleInputOnChange);
        };
    }, []);

    return (
        <>
        <Wrapper className="selected-list__autocomplete">
            <ResultListItem resultItemsArrayState = { resultItemsArrayState } />
        </Wrapper>
        </>
    );
};

export default ResultList;