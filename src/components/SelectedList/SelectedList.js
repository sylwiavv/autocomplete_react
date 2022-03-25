import React, {useContext} from 'react';
import { StyledList } from "../StyledList/StyledList.styles";
import { StyledLiItem } from "../StyledLiItem/StyledLiItem.styles";
import DeleteItem from "../DeleteItem/DeleteItem";
import {UserContext} from "../../providers/UserContextProvider";

const SelectedList = () => {
    const { selected, handleRemove } = useContext(UserContext);

    return (
        <StyledList className={`autocomplete__selected-list`}>
            {selected.map((selectedItem, index) =>
                (<StyledLiItem
                    className="autocomplete__selected-item"
                    key={index}
                    data-value={selectedItem}>
                    {selectedItem}
                    <DeleteItem onClick={() => handleRemove(index) } />
                </StyledLiItem>))}
        </StyledList>
    );
}

export default SelectedList;