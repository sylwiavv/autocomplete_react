import React from 'react';
import { MainWrapper } from "../MainWrapper/MainWrapper.styles";
import SelectedList from "../../organisms/SelectedList/SelectedList";
import ResultList from "components/organisms/ResultList/ResultList";
import InputAutoComplete from "components/atoms/InputAutoComplete/InputAutoComplete";
import { Title } from "../../atoms/Title/Title.styles";

const Autocomplete = () => {
    return (
        <>
            <Title>Autocomplete React</Title>
            <MainWrapper className="autocomplete__wrapper">
                <SelectedList />
                <MainWrapper className="autocomplete__input-wrapper">
                    <InputAutoComplete />
                    <ResultList />
                </MainWrapper>
            </MainWrapper>

        </>
    );
};

export default Autocomplete;