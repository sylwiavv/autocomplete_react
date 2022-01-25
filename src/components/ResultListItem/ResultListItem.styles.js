import styled from 'styled-components';

export const WrapperLi = styled.li`
  margin-bottom: 4px;
  margin-top: 4px;
  padding: 4px 8px;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;