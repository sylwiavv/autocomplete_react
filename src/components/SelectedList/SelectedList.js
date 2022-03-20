import React from 'react';
import { StyledList } from "../StyledList/StyledList.styles";
import { StyledLiItem } from "../StyledLiItem/StyledLiItem.styles";
import DeleteItem from "../DeleteItem/DeleteItem";

const SelectedList = ({selected, setSelected, updateSelectedItemsList}) => {
    const handleRemove = (clickedItem) => {
        const index = selected.indexOf(clickedItem);
        selected.splice(index, 1);
        setSelected(selected);
        updateSelectedItemsList(setSelected)
    };

    return (
        <StyledList className={`autocomplete__selected-list`}>
            {selected.map((selectedItem, index) =>
                (<StyledLiItem
                    className="autocomplete__selected-item"
                    key={index}
                    data-value={selectedItem}>
                    {selectedItem}
                    <DeleteItem onClick={() => handleRemove(selectedItem) } />
                </StyledLiItem>))}
        </StyledList>
    );
}

export default SelectedList;