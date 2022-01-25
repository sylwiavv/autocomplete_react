import styled from 'styled-components';

export const Wrapper = styled.ul`
  border-radius: 4px;
  margin-top: 16px;
  overflow: hidden;
  width: 100%;
  
  &.not-empty {
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;