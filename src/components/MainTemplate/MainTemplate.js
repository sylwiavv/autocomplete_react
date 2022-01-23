import React from 'react';
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../Title/Title.styles";
import  SearchInput from "components/InputAutoComplete/InputAutoComplete";
import ResultList from "components/ResultList/ResultList";

const MainTemplate = () => {
  return (
    <Wrapper>
      <Title>Autocomplete React</Title>
      <SearchInput />
      <ResultList />
    </Wrapper>
  );
};

export default MainTemplate;
