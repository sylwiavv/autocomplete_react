import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.colors.listsFontColor};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  overflow: hidden;
  width: 100%;
  
  &.autocomplete {
    &__result-list {
      flex-direction: column;
      position: absolute;
      top: ${({ theme }) => theme.height.input};
      
      background-color: ${({ theme }) => theme.colors.resultListBackgroundColor};
      box-shadow: ${({ theme }) => theme.boxShadow.primary};

      margin-top: ${({ theme }) => theme.indents.m};
      padding: ${({ theme }) => theme.indents.s};
      max-width: max-content;
      width: 90%;
    }

    &__selected-list {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: ${({ theme }) => theme.indents.s};
      width: unset;
    }
  }
`;