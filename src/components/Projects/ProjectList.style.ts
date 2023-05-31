import styled from "styled-components";

export const ProjectListWrapper = styled.div`
  background: #fff;
  margin: 16px;
  border-radius: 8px;
  color: #000;
  padding: 16px;
  text-align: left;
  min-width: 280px;
  p {
    all: unset;
    color: #9e5400;
  }
  h2 {
    margin: 8px 0;
    color: #8f4700;
  }
  :hover {
    filter: drop-shadow(0 0 12px #d99530aa);
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  height: 100px;
  width: 240px;
`;
