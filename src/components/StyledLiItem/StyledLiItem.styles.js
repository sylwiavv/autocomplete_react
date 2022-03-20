import styled from 'styled-components';

export const StyledLiItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => theme.indents.s};
  font-size: ${({theme}) => theme.fontSize.m};
  border-radius: ${({theme}) => theme.borderRadius.xs};
  white-space: pre-wrap;

  &.autocomplete {
    &__selected-item {
      background-color: ${({ theme }) => theme.colors.selectedListItemBackgroundColor};
      margin: 0
              ${({ theme }) => theme.indents.xs}
              ${({ theme }) => theme.indents.s}
              ${({ theme }) => theme.indents.s};

      &:not(:last-child) {
        margin-right: 0;
      }
    }
    
    &__result-item {
      color: ${({ theme }) => theme.colors.resultListFontColor};
      position: relative;
      
      &.active {
        color: ${({ theme }) => theme.colors.resultListFontColorHover};
        border-radius: ${({theme}) => theme.borderRadius.xs};
        background-color: ${({theme}) => theme.colors.resultListBackgroundColorHover};
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
`;