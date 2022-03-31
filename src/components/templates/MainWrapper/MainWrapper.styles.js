import styled from 'styled-components';

export const MainWrapper = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  max-width: 560px;
  margin: auto;

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
      border: 1px solid ${props => props.theme.borderColor};
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
