import React, { useState } from 'react';
import { Wrapper } from "components/ResultList/ResultList.styles";
import { WrapperLi } from "../ResultListItem/ResultListItem.styles";
import { technologies } from "data/technologies";
import { InputAutoComplete } from "../InputAutoComplete/InputAutoComplete.styles";

const ResultList = () => {
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);
    const [state, setState] = useState("");

        const toggleAccordion = () => {
        setState(state === "" ? "not-empty" : "");
    }

    const onChangeHandler = (text) => {
        if (!text) {
            setText('');
            setResults([]);
            toggleAccordion();
        } else {
            let matches = [""];
            if (matches.length > 0) {
                matches = technologies.filter(tech => {
                    const regex = new RegExp(`${text}`, "gi");
                    return tech.match(regex);
                })
            }
            matches.unshift(text);
            setState("not-empty");
            setResults(matches);
            setText(text)
        }
    }

    const addElementOnClick = (e) => {
        const clickedElement = e.target.dataset.value.trim();
        console.log(clickedElement)
    }

    return (
        <>
            <InputAutoComplete
                id="input-autocomplete"
                type="text" placeholder="Choose your technology"
                onChange={e => onChangeHandler(e.target.value)}
                value={text}>
            </InputAutoComplete>
            <Wrapper className={`${state}`}>
                {results.map(resultItem =>
                    (<WrapperLi
                        onClick={addElementOnClick}
                        className="result-item__autocomplete"
                        key={resultItem}
                        data-value={resultItem}
                        data={resultItem}
                    >
                        {resultItem}
                    </WrapperLi>))}
            </Wrapper>
        </>
    );
};

export default ResultList;