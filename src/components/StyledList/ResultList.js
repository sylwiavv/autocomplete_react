import React, {useContext, useState} from 'react';
import { StyledList } from "components/StyledList/StyledList.styles";
import { StyledLiItem } from "../StyledLiItem/StyledLiItem.styles";
import { InputAutoComplete } from "../InputAutoComplete/InputAutoComplete.styles";
import SelectedList from "../SelectedList/SelectedList";
import { MainWrapper } from "../MainWrapper/MainWrapper.styles";
import { UserContext } from "providers/UserContextProvider"

const ResultList = () => {
    const {
        state,
        text,
        results,
        activeSuggestion, setActiveSuggestion,

        onChangeHandler,
        addElementOnClick,
        handleKeyDown,
    } = useContext(UserContext);

    return (
        <MainWrapper className="autocomplete__wrapper">
            <SelectedList />
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