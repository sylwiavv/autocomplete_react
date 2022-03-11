import styled from 'styled-components';

export const WrapperLi = styled.li`
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;

  // &:first-child {
  //   font-weight: ${({ theme }) => theme.fontWeight.bolder};
  //   background-color: ${({ theme }) => theme.colors.grey};
  // }

  background: ${({ theme, addClass }) => {
    if ( addClass ) return theme.colors.success;
    if ( !addClass ) return theme.colors.error;
  }};

  &:hover {
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;