import styled from 'styled-components';

export const WrapperLi = styled.li`
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;

  // &:first-child {
  //   font-weight: ${({ theme }) => theme.fontWeight.bolder};
  //   background-color: ${({ theme }) => theme.colors.grey};
  // }

  background: ${({ theme, className }) => {
    if ( className ) return theme.colors.success;
  }};  
  
  transition: ${({ className }) => {
    if ( className ) return '.9s';
  }};

  &:hover {
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;