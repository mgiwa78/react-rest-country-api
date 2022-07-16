import styled, { css } from "styled-components/macro";

export const NavActionsContainer = styled.div`
  padding-top: 120px;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 300;

  justify-content: center;
  margin-bottom: 60px;

  @media screen and (min-width: 610px) {
    justify-content: flex-start;

    /* margin-right: 50px; */
  }

  @media screen and (min-width: 860px) {
    justify-content: space-between;
    width: 100%;

    /* margin-right: 50px; */
  }
`;
export const NavSearch = styled.input`
  height: 50px;
  margin-bottom: 20px;
  width: 300px;

  font-size: 16px;

  padding: 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  ${({ styleId }) => {
    if (styleId === "light") {
      return css`
        &&::placeholder {
          color: #000000a6 !important;
        }
      `;
    } else {
      return css`
        &&::placeholder {
          color: #ffffffcc !important;
        }
      `;
    }
  }}

  &&::placeholder {
    color: #ffffffb3;
  }
  @media screen and (min-width: 610px) {
    width: 500px;
    /* margin-right: 50px; */
  }
  @media screen and (min-width: 860px) {
    width: 200px;

    /* margin-right: 50px; */
  }
`;
export const NavDropdown = styled.select`
  width: 300px;
  border: none;
  font-size: 16px;

  border-radius: 5px;
  height: 50px;
  padding: 10px;
  padding-left: 25px;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==) !important;
  background-repeat: no-repeat !important;
  background-position-x: 100% !important;
  background-position-y: 50% !important;

  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  -ms-appearance: none !important;
  -o-appearance: none !important;
  appearance: none !important;
  fill: "#fff";

  /* &&[listbox] {
    lis
    padding: 10px;
    margin-top: 5px;
    border: 1px solid red;
    border-radius: 5px;
  } */
  @media screen and (min-width: 860px) {
    width: 120px;

    /* margin-right: 50px; */
  }
`;
export const NavDropdownOption = styled.option`
  margin-bottom: 50px;
  height: 100px;
  border: none;
`;
