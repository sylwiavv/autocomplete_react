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
            setState("not-empty");
            setResults(matches);
            setText(text)
        }
    }

    return (
        <>
            <InputAutoComplete
                id="input-autocomplete"
                type="text" placeholder="Choose your technology"
                onChange={e => onChangeHandler(e.target.value)}
                value={text}>
            </InputAutoComplete>
            <Wrapper
                className={`${state}`}>
                <WrapperLi className="result-item__autocomplete">{text}</WrapperLi>
                {results.map(resultItem =>
                    (<WrapperLi
                        className="result-item__autocomplete"
                        key={resultItem}>
                        {resultItem}
                    </WrapperLi>))}
            </Wrapper>
        </>
    );
};

export default ResultList;