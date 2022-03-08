import React, {useState} from 'react';
import {Wrapper} from "components/ResultList/ResultList.styles";
import {WrapperLi} from "../ResultListItem/ResultListItem.styles";

const SelectedList = ({ selected }) => {
    return (
        <Wrapper>
            {selected.map(selectedItem =>
                (<WrapperLi
                    className="selected-item__autocomplete"
                    key={selectedItem}
                    data-value={selectedItem}
                >
                    {selectedItem}
                </WrapperLi>))}
        </Wrapper>
    );
}

export default SelectedList;