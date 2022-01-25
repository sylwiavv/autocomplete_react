import styled from 'styled-components';

export const InputAutoComplete = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  outline: none;
  padding: 4px 8px;
  height: 48px;
  width: 100%;
  transition: border-color .4s;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.darkGrey};
  }

  &::placeholder {
    text-align: start;
  }
`;