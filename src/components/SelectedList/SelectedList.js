import React, {useContext} from 'react';
import { StyledList } from "../StyledList/StyledList.styles";
import { StyledLiItem } from "../StyledLiItem/StyledLiItem.styles";
import DeleteItem from "../DeleteItem/DeleteItem";
import { ListContext } from "../../providers/GlobalContext";

const SelectedList = () => {
    const { selected, handleRemove } = useContext(ListContext);

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