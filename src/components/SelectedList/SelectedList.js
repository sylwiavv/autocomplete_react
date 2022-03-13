import React from 'react';
import {Wrapper} from "components/ResultList/ResultList.styles";
import {WrapperLi} from "../ResultListItem/ResultListItem.styles";
import DeleteItem from "../DeleteItem/DeleteItem";

const SelectedList = ({selected, setSelected, updateSelectedItemsList}) => {
    const handleRemove = (clickedItem) => {
        const index = selected.indexOf(clickedItem);
        selected.splice(index, 1);
        setSelected(selected);
        updateSelectedItemsList(setSelected)
    };

    return (
        <Wrapper>
            {selected.map((selectedItem, index) =>
                (<WrapperLi
                    className="selected-item__autocomplete"
                    key={index}
                    data-value={selectedItem}>
                    {selectedItem}
                    <DeleteItem onClick={() => handleRemove(selectedItem) } />
                </WrapperLi>))}
        </Wrapper>
    );
}

export default SelectedList;