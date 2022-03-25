import styled from 'styled-components';

import {ReactComponent as DeleteIcon} from 'assets/icons/icon__close.svg';

export const StyledDeleteIcon = styled(DeleteIcon)`
  fill: ${({ theme }) => theme.colors.deleteIconBackgroundColor};
  
  &:hover {
    fill: ${({ theme }) => theme.colors.deleteIconBackgroundColorHover};
    transition: .4s;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.indents.s};
`;