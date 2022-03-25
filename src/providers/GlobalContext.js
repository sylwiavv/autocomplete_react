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
    const [state, setState] = useState("");
    let [text, setText] = useState("");
    let [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);

    let [activeSuggestion, setActiveSuggestion] = useState(0);

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
                    matches = data.filter(tech => {
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

    const toggleAccordion = () => {
        setState(state === "" ? "not-empty" : "");
    }

    const handleRemove = (index) => {
        selected.splice(index, 1);
        setSelected([...selected]);
    };

    return (
        <ListContext.Provider value={{
            state,
            text,
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