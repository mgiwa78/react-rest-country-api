import styled, { css } from "styled-components";

export const CountryCountainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 17px;
  padding: 120px 40px 0px 40px;
  width: 100vw;
  border-radius: 5px;
  text-align: left;
  min-height: 100vh;
  height: inherit;
  @media screen and (min-width: 1000px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const CountryBox = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: 1067px) {
    justify-content: space-around;
  }
  @media screen and (min-width: 1125px) {
    max-width: 1000px;
  }
`;
export const CountryDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    margin-left: 20px;
    width: 500px;
  }
`;
export const CountryDetailsTop = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const CountryImage = styled.img`
  width: 300px;
  max-width: 500px;
  margin-bottom: 20px;

  background-position: center;
  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;
export const CountryTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 800;
`;
export const CountryTag = styled.span`
  font-weight: 600;
`;
export const CountryContentBox = styled.div`
  margin-top: 8px;
`;
export const CountryContent = styled.span`
  font-weight: 300;
  margin-left: 10px;
  font-size: 14px;
`;

export const CountryPrimaryBox = styled.div`
  padding-top: 10px;
  max-width: 400px;
`;
export const CountrySecondaryBox = styled.div`
  padding-top: 20px;
`;
export const BorderBox = styled.div`
  margin-top: 30px;
`;
export const BorderBoxTitle = styled.div`
  font-weight: 600;
`;
export const BorderBoxElements = styled.div`
  margin-top: 15px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;
const Button = () => css`
  padding: 7px 22px;
  box-shadow: rgba(0, 0, 0, 0.119) 0px 5px 15px;
  border-radius: 2px;
  box-shadow: 0px;
  border: none;
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
`;
export const BorderButton = styled.button`
  ${Button()}
  margin-right: 20px;
  margin-bottom: 20px;
`;
export const BackButton = styled.button`
  ${Button()}
  position: relative;
  top: 0;
  right: 50%;
  transform: translateX(63%);
  margin-bottom: 20px;

  @media screen and (min-width: 1000px) {
    top: 0;
    right: 0;
    transform: translateX(21%);
    margin-bottom: 30px;
    padding: 10px 33px;
    font-size: 16px;
  }
`;
