import React from 'react';
import { MainWrapper } from "./MainWrapper.styles";
import { Title } from "../Title/Title.styles";
import ResultList from "../StyledList/ResultList";

const MainTemplate = () => {
    return (
        <MainWrapper>
            <Title>Autocomplete React</Title>
            <ResultList />
        </MainWrapper>
    );
};

export default MainTemplate;
