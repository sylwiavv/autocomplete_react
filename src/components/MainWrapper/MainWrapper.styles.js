import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: auto;
  max-width: 560px;

  &.autocomplete {
    &__input-wrapper {
      position: relative;
      display: flex;
      flex: 1;

      border-radius: ${({ theme }) => theme.borderRadius.s};
    }
    
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      border-radius: ${({ theme }) => theme.borderRadius.s};
      
      margin-bottom: ${({ theme }) => theme.indents.m};
      transition: border-color, .4s;
      
      &:focus,
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        outline: none;
      }
    }
  }
`;
