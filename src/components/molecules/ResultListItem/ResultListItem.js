import React, {useContext} from "react";
import {StyledLiItem} from "../../atoms/StyledLiItem/StyledLiItem.styles";
import {ListContext} from "../../../providers/GlobalContext";

const ResultListItem = () => {
    const {
        results,
        activeSuggestion, setActiveSuggestion,

        addElementOnClick,
    } = useContext(ListContext);

    return (
        results.map((resultItem, index) =>
            (<StyledLiItem
                onClick={addElementOnClick}
                key={index}
                data-value={resultItem}
                className={`${index === activeSuggestion ? 'active' : ''} autocomplete__result-item `}
                onMouseEnter={() => setActiveSuggestion(index)}>
                {resultItem}
            </StyledLiItem>))
    )
}

export default ResultListItem;
