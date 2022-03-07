import React from 'react';
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../Title/Title.styles";
import ResultList from "../ResultList/ResultList";
import SelectedList from "../SelectedList/SelectedList";

const MainTemplate = () => {
    return (
        <Wrapper>
            <Title>Autocomplete React</Title>
            <ResultList />
            <SelectedList />
        </Wrapper>
    );
};

export default MainTemplate;
