import React, {useState} from 'react';
import {Wrapper} from "components/ResultList/ResultList.styles";
import {WrapperLi} from "../ResultListItem/ResultListItem.styles";
import {technologies} from "data/technologies";
import {InputAutoComplete} from "../InputAutoComplete/InputAutoComplete.styles";
import SelectedList from "../SelectedList/SelectedList";
import {ARROW_DOWN, ARROW_UP, BACKSPACE, ENTER} from "../../utils/consts";
import {escapeRegExp} from "../../helpers/helpers";

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
                        // const regex = new RegExp(`${text}`, "gi");
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

    return (
        <>
            <InputAutoComplete
                id="input-autocomplete"
                type="text" placeholder="Choose your technology"
                onChange={e => onChangeHandler(e.target.value)}
                value={text === undefined ? results[activeSuggestion] : text}
                onKeyDown={handleKeyDown}>
            </InputAutoComplete>
            <Wrapper className={`${state}`}>
                {results.map((resultItem, index) =>
                    (<WrapperLi
                        onClick={addElementOnClick}
                        key={index}
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