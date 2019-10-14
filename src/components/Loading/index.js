import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    svg {
        animation: ${rotate} 2s linear infinite;
    }
`;

export default Loading;
