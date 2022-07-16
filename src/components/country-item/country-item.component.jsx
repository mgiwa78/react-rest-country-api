import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectMode } from "../../store/mode/mode.selector";
import { useNavigate } from "react-router-dom";
import {
  CountryBox,
  CountryContent,
  CountryContentBox,
  CountryImage,
  CountryItemCountainer,
  CountryPrimaryBox,
  CountrySecondaryBox,
  CountryTag,
  CountryTitle,
} from "./country-item.styles";
import { SetCountryToDisplay } from "../../store/country/country.action";
import { SelectMemoisedCountries } from "../../store/country/country.selector";

const CountryItem = ({ country, itemStyle }) => {
  const {
    capital,
    population,
    subregion,
    languages,
    nativeName,
    borders,
    region,
    topLevelDomain,
    currencies,
  } = country.otherProps;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePageChnge = () => {
    navigate(`/country/${country.name}`);
  };

  // const countryData = {
  //   name: country.name,
  //   flag: country.flag,
  //   otherProps: [country.],
  // };
  // console.log(countryData);

  // const defaultPageStyle = {
  //   color: "white",
  //   backgroundColor: " hsl(209, 23%, 22%)",
  // };

  // const modeChange = useSelector(SelectMode);

  // const [itemStyle, setItemStyle] = useState(pageStyle);

  return (
    <CountryItemCountainer
      onClick={() => handlePageChnge()}
      style={{ ...itemStyle }}
    >
      <CountryImage src={`${country.flag}`} />{" "}
      <CountryBox>
        <CountryTitle>{country.name}</CountryTitle>

        {/* <CountryContentBox>
          <CountryTag>Native Name:</CountryTag>
          <CountryContent>{nativeName}</CountryContent>
        </CountryContentBox> */}
        <CountryContentBox>
          <CountryTag>Population:</CountryTag>
          <CountryContent>{population}</CountryContent>
        </CountryContentBox>
        <CountryContentBox>
          <CountryTag>Region:</CountryTag>
          <CountryContent>{region}</CountryContent>
        </CountryContentBox>
        {/* <CountryContentBox>
          <CountryTag>Sub Region:</CountryTag>
          <CountryContent>{subregion}</CountryContent>
        </CountryContentBox> */}
        <CountryContentBox>
          <CountryTag>Capital:</CountryTag>
          <CountryContent>{capital}</CountryContent>
        </CountryContentBox>
      </CountryBox>
      {/* <CountrySecondaryBox>
        <CountryContentBox>
          <CountryTag>Top Level Domain:</CountryTag>
          <CountryContent>{topLevelDomain}</CountryContent>
        </CountryContentBox>
        <CountryContentBox>
          <CountryTag>Currencies:</CountryTag>
          <CountryContent>{currencies ? "Euro" : "none"}</CountryContent>
        </CountryContentBox>
        <CountryContentBox>
          <CountryTag>Language:</CountryTag>
          <CountryContent>{currencies ? "English" : "none"}</CountryContent>
        </CountryContentBox>
      </CountrySecondaryBox> */}
    </CountryItemCountainer>
  );
};

export default CountryItem;
