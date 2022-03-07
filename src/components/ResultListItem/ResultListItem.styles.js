import styled from 'styled-components';

export const WrapperLi = styled.li`
  padding: 4px 8px;

  &:first-child {
    font-weight: ${({ theme }) => theme.fontWeight.bolder};
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;