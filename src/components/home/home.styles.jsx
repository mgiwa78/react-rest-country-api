import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: inherit;
  width: 100vw;
  padding: 0 120px 0 100px;
  @media screen and (min-width: 1000px) {
    padding: 65px;
  }
`;
