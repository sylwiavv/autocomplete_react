import React, { useState, createContext } from 'react';
import { technologies as data } from 'data/technologies';
import { escapeRegExp} from "../helpers/helpers";
import { ARROW_DOWN, ARROW_UP, BACKSPACE, ENTER } from "../utils/consts";

const ListContext = createContext({
    onChangeHandler: () => {},
    addElementOnClick: () => {},
    handleKeyDown: () => {},
    handleRemove: () => {},
});

const GlobalContext = ({ children }) => {
    const [ emptyListClass, setEmptyListClass ] = useState("");
    let [ activeSuggestion, setActiveSuggestion ] = useState(0);
    let [ inputText, setInputText ] = useState("");
    const [ results, setResults ] = useState([]);
    const [ selected, setSelected ] = useState([]);

    const onChangeHandler = (text) => {
        if (!text) {
            setInputText("");
            setResults([]);
            toggleAccordion();
        } else {
            setInputText(text);
            let matches = [""];
            if (text.trim() !== "") {
                if (matches.length > 0) {
                    matches = data.filter(matchElement => {
                        const match = matchElement.toLowerCase().replace(/\s/g, "");
                        return match.match(escapeRegExp(text.toLowerCase().replace(/\s/g, '')));
                    })
                }
                matches.unshift(text);
                setEmptyListClass("not-empty");
                setResults(matches);
                setInputText(text);
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
            setInputText("");
            setEmptyListClass("");
        }
        setSelected(selectedArray);
    }

    const handleKeyDown = (e) => {
        const suggestionsLength = results.length;
        if (inputText !== "") {
            if (e.keyCode === ENTER) {
                let currentInputValue = inputText.trim();
                if (currentInputValue !== "") {
                    const foundItems = selected.filter(selectedElement => selectedElement === currentInputValue);
                    if (foundItems.length === 0) {
                        selected.push(currentInputValue);
                    }
                }
                setEmptyListClass('');
                setResults([]);
                setInputText('');
                setActiveSuggestion(0);

            }
            else if (e.keyCode === ARROW_UP) {
                let actualElement = activeSuggestion - 1;
                setActiveSuggestion(activeSuggestion - 1);

                if (results[actualElement] === undefined) {
                    setActiveSuggestion(suggestionsLength - 1);
                    setInputText(inputText);
                }

                inputText = results[actualElement]
                setInputText(inputText);

            }
            else if (e.keyCode === ARROW_DOWN) {
                let actualElement = activeSuggestion + 1;
                setActiveSuggestion(actualElement);

                if ((suggestionsLength - 2) <= activeSuggestion) {
                    activeSuggestion = suggestionsLength - 1;
                    setActiveSuggestion(activeSuggestion);
                }

                if (results[actualElement] === undefined) {
                    setActiveSuggestion(0);
                }

                inputText = results[actualElement];
                setInputText(inputText);

            }
            else if (e.keyCode === BACKSPACE) {
                if (inputText === "") {
                    setResults([]);
                    selected.pop();
                    setSelected(0);
                }
            }
        }

        if (e.keyCode === BACKSPACE && inputText === "") {
            selected.pop();
            setSelected([...selected]);
        }
    }

    const toggleAccordion = () => {
        setEmptyListClass(emptyListClass === "" ? "not-empty" : "");
    }

    const handleRemove = (index) => {
        selected.splice(index, 1);
        setSelected([...selected]);
    };

    return (
        <ListContext.Provider value={{
            emptyListClass,
            inputText,
            results,
            selected,
            activeSuggestion, setActiveSuggestion,

            toggleAccordion,
            onChangeHandler,
            addElementOnClick,
            handleKeyDown,
            handleRemove,
        }}>
            {children}
        </ListContext.Provider>
    );
};

export { ListContext, GlobalContext };