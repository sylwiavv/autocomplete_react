import React, {useState, useEffect} from 'react';
import {Wrapper} from "components/ResultList/ResultList.styles";
import {WrapperLi} from "../ResultListItem/ResultListItem.styles";
import {technologies} from "data/technologies";
import {InputAutoComplete} from "../InputAutoComplete/InputAutoComplete.styles";
import SelectedList from "../SelectedList/SelectedList";
import {ARROW_DOWN, ARROW_UP, ENTER, ESC, BACKSPACE} from "../../utils/consts";

const ResultList = () => {
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);
    const [state, setState] = useState("");
    const [selected, setSelected] = useState([]);

    let [activeSuggestion, setActiveSuggestion] = useState(0);

    const updateSelectedItemsList = (selectedItem) => {
        setSelected(selectedItem);
    }

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
        const selectedArray = [...selected];
        const foundItems = selectedArray.filter(selectedElement => selectedElement === clickedElement);
        if (foundItems.length === 0) {
            selectedArray.push(clickedElement);
        }
        setSelected(selectedArray);
    }


    const handleKeyDown = (e) => {
        const suggestionsLength = results.length;

        if (e.keyCode === ENTER) {
            selected.push(text);
            setState('');
            setResults([]);
            setText('');
        } else if (e.keyCode === ARROW_UP) {
            let actualElement = activeSuggestion - 1;
            setActiveSuggestion(activeSuggestion - 1);

            if (results[actualElement] === undefined) {
                setActiveSuggestion(suggestionsLength - 1);
            }
        } else if (e.keyCode === ARROW_DOWN) {
            let actualElement = activeSuggestion + 1;
            setActiveSuggestion(actualElement);

            if ((suggestionsLength - 2) <= activeSuggestion) {
                activeSuggestion = suggestionsLength - 1;
                setActiveSuggestion(activeSuggestion);
            }

            if (results[actualElement] === undefined) {
                setActiveSuggestion(0);
            }
        }
    }

    //
    // useEffect(() => {
    //     handleKeyDown();
    //
    //     return () => {
    //         handleKeyDown();
    //     };
    // }, [handleKeyDown])


    return (
        <>
            <InputAutoComplete
                id="input-autocomplete"
                type="text" placeholder="Choose your technology"
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                onKeyDown={handleKeyDown}>
            </InputAutoComplete>
            <Wrapper className={`${state}`}>
                {results.map((resultItem, index) =>
                    (<WrapperLi
                        onClick={addElementOnClick}
                        // className={index === suggestionIndex ? "active" : ""}
                        key={resultItem}
                        data-value={resultItem}
                        data={resultItem}
                        className={index === activeSuggestion ? 'active' : ''}
                    >
                        {resultItem}
                    </WrapperLi>))}
            </Wrapper>
            <SelectedList
                selected={selected}
                setSelected={setSelected}
                updateSelectedItemsList={setSelected}
            />
        </>
    );
};

export default ResultList;