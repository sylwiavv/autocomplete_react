import React, {useState} from 'react';
import {StyledList} from "components/StyledList/StyledList.styles";
import {StyledLiItem} from "../StyledLiItem/StyledLiItem.styles";
import {technologies} from "data/technologies";
import { InputAutoComplete } from "../InputAutoComplete/InputAutoComplete.styles";
import SelectedList from "../SelectedList/SelectedList";
import { ARROW_DOWN, ARROW_UP, BACKSPACE, ENTER } from "../../utils/consts";
import { escapeRegExp } from "../../helpers/helpers";
import { MainWrapper } from "../MainWrapper/MainWrapper.styles";

const ResultList = () => {
    let [text, setText] = useState("");
    let [results, setResults] = useState([]);
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
            setText("");
            setResults([]);
            toggleAccordion();
        } else {
            setText(text);
            let matches = [""];
            if (text.trim() !== "") {
                if (matches.length > 0) {
                    matches = technologies.filter(tech => {
                        const techItems = tech.toLowerCase().replace(/\s/g, "");
                        return techItems.match(escapeRegExp(text.toLowerCase().replace(/\s/g, '')));
                    })
                }
                matches.unshift(text);
                setState("not-empty");
                setResults(matches);
                setText(text);
            }
        }
    }

    const addElementOnClick = (e) => {
        const clickedElement = e.target.dataset.value.trim();
        const selectedArray = [...selected];
        const foundItems = selectedArray.filter(selectedElement => selectedElement === clickedElement);
        if (foundItems.length === 0) {
            selectedArray.push(clickedElement);
            setResults([]);
            setText("");
            setState("");
        }
        setSelected(selectedArray);
    }

    const handleKeyDown = (e) => {
        const suggestionsLength = results.length;
        if (text !== "") {
            if (e.keyCode === ENTER) {
                let currentInputValue = text.trim();
                if (currentInputValue !== "") {
                    const foundItems = selected.filter(selectedElement => selectedElement === currentInputValue);
                    if (foundItems.length === 0) {
                        selected.push(currentInputValue);
                    }
                }
                setState('');
                setResults([]);
                setText('');
                setActiveSuggestion(0);

            } else if (e.keyCode === ARROW_UP) {
                let actualElement = activeSuggestion - 1;
                setActiveSuggestion(activeSuggestion - 1);

                if (results[actualElement] === undefined) {
                    setActiveSuggestion(suggestionsLength - 1);
                    setText(text);
                }

                text = results[actualElement]
                setText(text);

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

                text = results[actualElement];
                setText(text);

            } else if (e.keyCode === BACKSPACE) {
                if (text === "") {
                    setResults([]);
                    setSelected(0);
                }
            }
        }
    }

    // useEffect(() => {
    //     handleKeyDown();
    //
    //     return () => {
    //         handleKeyDown();
    //     };
    // }, [handleKeyDown])

    // {selected.length > 0 ? (


    return (
        <MainWrapper className="autocomplete__wrapper">
            <SelectedList
                selected={selected}
                setSelected={setSelected}
                updateSelectedItemsList={setSelected}
            />
            <MainWrapper className="autocomplete__input-wrapper">
                <InputAutoComplete
                    id="input-autocomplete"
                    type="text" placeholder="Choose your technology"
                    onChange={e => onChangeHandler(e.target.value)}
                    value={text === undefined ? results[activeSuggestion] : text}
                    onKeyDown={handleKeyDown}>
                </InputAutoComplete>
                { results.length > 0 &&
                    <StyledList className={`${state} autocomplete__result-list`}>
                        {results.map((resultItem, index) =>
                            (<StyledLiItem
                                onClick={addElementOnClick}
                                key={index}
                                data-value={resultItem}
                                className={`${index === activeSuggestion ? 'active' : ''} autocomplete__result-item `}
                                onMouseEnter={() => setActiveSuggestion(index)}>
                                {resultItem}
                            </StyledLiItem>))}
                    </StyledList>
                }
            </MainWrapper>
        </MainWrapper>
    );
};

export default ResultList;