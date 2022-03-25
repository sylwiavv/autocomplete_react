import React, {useContext} from "react";
import { ListContext } from "../../../providers/GlobalContext";
import { StyledLiItem } from "../../atoms/StyledLiItem/StyledLiItem.styles";
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";

const SelectedListItem = () => {
    const { selected, handleRemove } = useContext(ListContext);

    return (
        selected.map((selectedItem, index) =>
            (<StyledLiItem
                className="autocomplete__selected-item"
                key={index}
                data-value={selectedItem}>
                {selectedItem}
                <DeleteButton onClick={() => handleRemove(index)}/>
            </StyledLiItem>))
    )
}

export default SelectedListItem;