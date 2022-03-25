import React from 'react';
import { StyledList } from "../../atoms/StyledList/StyledList.styles";
import SelectedListItem from "../../molecules/SelectedListItem/SelectedListItem";

const SelectedList = () => {
    return (
        <StyledList className={`autocomplete__selected-list`}>
            <SelectedListItem />
        </StyledList>
    );
}

export default SelectedList;