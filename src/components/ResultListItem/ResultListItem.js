import React from 'react';
import { WrapperLi } from "components/ResultListItem/ResultListItem.styles";
// import  { escapeRegExp } from "helpers/helpers"

const ResultListItem = ({ resultItemsArrayState }) => {
    return (
        resultItemsArrayState.map(resultItem => (
                <WrapperLi
                    key={resultItem}
                    className="result-item__autocomplete">
                    {resultItem}</WrapperLi>
            )
        )
    );
};

export default ResultListItem;
