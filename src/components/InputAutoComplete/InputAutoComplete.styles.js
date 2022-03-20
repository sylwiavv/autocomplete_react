import styled from 'styled-components';

export const InputAutoComplete = styled.input`
  display: flex;
  align-self: flex-start;
  text-align: start;
  flex: 1;
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.s};
  height: ${({ theme }) => theme.height.input};

  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
  
  min-width: max-content;
  
  &:focus,
  &:hover {
    border: none;
    outline: none;
  }

  &::placeholder {
    text-align: start;
  }
`;