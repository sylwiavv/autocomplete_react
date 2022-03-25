import React from 'react';
import { MainWrapper } from "./MainWrapper.styles";
import { Title } from "../../atoms/Title/Title.styles";
import Autocomplete from "../Autocomplete/Autocomplete";

const MainTemplate = () => {
    return (
        <MainWrapper>
            <Title>Autocomplete React</Title>
            <Autocomplete />
        </MainWrapper>
    );
};

export default MainTemplate;
