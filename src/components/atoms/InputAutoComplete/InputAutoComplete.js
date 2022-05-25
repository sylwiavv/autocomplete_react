import React, { useContext } from "react";
import { Input } from "../Input/Input.styles";
import { ListContext } from "../../../providers/GlobalContext";

const InputAutoComplete = () => {
    const {
        inputText,
        results,
        activeSuggestion,

        onChangeHandler,
        handleKeyDown,
    } = useContext(ListContext);

    return (
        <Input
            id="input-autocomplete"
            data-testid="input"
            type="text" placeholder="Choose your technology"
            onChange={e => onChangeHandler(e.target.value)}
            value={inputText === undefined ? results[activeSuggestion] : inputText}
            onKeyDown={handleKeyDown}>
        </Input>
    )
}

export default InputAutoComplete;