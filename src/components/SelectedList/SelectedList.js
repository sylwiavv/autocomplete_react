import React, { useState } from 'react';
import { Wrapper } from "components/ResultList/ResultList.styles";
import { WrapperLi } from "../ResultListItem/ResultListItem.styles";

const SelectedList = () => {
    const [selected, setSelected] = useState([]);

    return (
        <Wrapper className='hello'>
                <WrapperLi className="selected-item__autocomplete">
                </WrapperLi>
        </Wrapper>
    );
}

export default SelectedList;