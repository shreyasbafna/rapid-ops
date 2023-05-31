import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<any>`
  display: inline-block;
  animation: ${rotate} 0.5s linear infinite;
  height: ${(props: any) => props.fontSize};
`;
