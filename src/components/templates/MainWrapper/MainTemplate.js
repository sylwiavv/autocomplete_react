import React from 'react';
import { MainWrapper } from "./MainWrapper.styles";
import Autocomplete from "../Autocomplete/Autocomplete";

const MainTemplate = () => {
    return (
        <MainWrapper>
            <Autocomplete/>
        </MainWrapper>
    );
};

export default MainTemplate;
