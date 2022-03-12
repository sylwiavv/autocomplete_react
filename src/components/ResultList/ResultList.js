import React, { useState } from 'react';
import { Wrapper } from "components/ResultList/ResultList.styles";
import { WrapperLi } from "../ResultListItem/ResultListItem.styles";
import { technologies } from "data/technologies";
import { InputAutoComplete } from "../InputAutoComplete/InputAutoComplete.styles";
import SelectedList from "../SelectedList/SelectedList";
import {ARROW_DOWN, ARROW_UP, ENTER, ESC, BACKSPACE} from "../../utils/consts";

const ResultList = () => {
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);
    const [state, setState] = useState("");
    const [selected, setSelected] = useState([]);
    let [indexItem, setIndexItem] = useState(0);

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

    let [activeSuggestion, setActiveSuggestion] = useState(0);

    const handleKeyDown = (e) => {
        let previousElement;
        let actualElement;

        const liElementsLength = results.length;

        if (e.keyCode === ARROW_DOWN && liElementsLength > 0) {
            activeSuggestion++;
            setActiveSuggestion(activeSuggestion)
            previousElement = results[activeSuggestion - 2];
            actualElement = results[activeSuggestion - 1];

            setText(actualElement);

            const lastItemIndex = (results.indexOf(actualElement) + 1);

            if (lastItemIndex === liElementsLength) {
                setActiveSuggestion(0);
            }
        }

        if (e.keyCode === ARROW_UP && liElementsLength > 0) {
            activeSuggestion--;
            setActiveSuggestion(activeSuggestion)
            previousElement = results[activeSuggestion];
            actualElement = results[activeSuggestion - 1];

            setText(actualElement);

            // const lastItemIndex = (results.indexOf(actualElement - 1));
            // console.log(lastItemIndex)
            console.log("actual element" + results.indexOf(actualElement))
            if (actualElement === undefined) {
                        setActiveSuggestion(liElementsLength - 1 )
                console.log('tutaj jestem')

            }

            //
            // if (lastItemIndex === 0) {
            //     console.log('last item')
            //     // console.log(lastItemIndex, liElementsLength)
            //     //
            //     if (lastItemIndex === -1) {
            //         console.log(lastItemIndex)
            //         setActiveSuggestion(liElementsLength - 1 )
            //     }
            // }
        }

        if (e.keyCode === ESC) {
            console.log('You pressed the escape key!')
        }


        if (e.keyCode === ENTER) {
            selected.push(text);
            setState('');
            setResults([]);
            setText('');
        }
        if (e.keyCode === BACKSPACE) {
            console.log('Back')
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
                value={text}
                onKeyDown={handleKeyDown}>
            </InputAutoComplete>
            <Wrapper className={`${state}`} >
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
            </Wrapper >
            <SelectedList
                selected={selected}
                setSelected={setSelected}
                updateSelectedItemsList={setSelected}
            />
        </>
    );
};

export default ResultList;