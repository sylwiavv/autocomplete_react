import React from 'react';
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../Title/Title.styles";
import ResultList from "../ResultList/ResultList";

const MainTemplate = () => {
    return (
        <Wrapper>
            <Title>Autocomplete React</Title>
            <ResultList />
        </Wrapper>
    );
};

export default MainTemplate;
