import React, {useContext} from 'react';
import { ListContext } from "../../../providers/GlobalContext";
import { StyledList } from "../../atoms/StyledList/StyledList.styles";
import ResultListItem from "../../molecules/ResultListItem/ResultListItem";

const ResultList = () => {
    const { emptyListClass, results } = useContext(ListContext);

    return (
        results.length > 0 &&
        <StyledList className={`${emptyListClass} autocomplete__result-list`}
                    data-testid="result-list" >
            <ResultListItem data-testid="result-list-item"/>
        </StyledList>
    )
}

export default ResultList;