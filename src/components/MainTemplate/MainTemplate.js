import React from 'react';
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../Title/Title.styles";
import ResultList from "../ResultList/ResultList";
import SelectedList from "../SelectedList/SelectedList";
import ToDo from "../ToDo/ToDo";

const MainTemplate = () => {
    return (
        <Wrapper>
            <Title>Autocomplete React</Title>
            <ResultList />
            <SelectedList />
            <ToDo />
        </Wrapper>
    );
};

export default MainTemplate;
