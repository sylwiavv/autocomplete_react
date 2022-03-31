import styled from 'styled-components';

export const ThemeToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in;
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme.indents.xxl};
  border-radius: 20px;
  background-color: ${props => props.theme.toggleBackgroundColor};
  height: 32px;
  width: 56px;
  
  &:hover {
    cursor: pointer;
  }

  svg {
    height: 20px;
    width: 20px;
  }

  #star-light-small,
  #star-light-big {
    animation: littleShine 6s linear infinite;
  }

  @keyframes rotating {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes littleShine {
    0% {
      fill: ${({theme}) => theme.colors.darkColorSun};
    }
    50% {
      fill: ${({theme}) => theme.colors.lightColorSun};
    }
    100% {
      fill: ${({theme}) => theme.colors.darkColorSun};
    }
  }
`;


export const IconWrapper = styled.div`
  display: flex;
  animation: rotating 50s linear infinite;
`;
