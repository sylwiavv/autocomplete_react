import styled from 'styled-components';

export const InputAutoComplete = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;
  height: 48px;
  width: 100%;
  
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }

  &:focus,
  &:hover {
    border-color: #0a0a1e;
  }

  &::placeholder {
    text-align: start;
  }
`;