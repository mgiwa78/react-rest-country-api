import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  SelectCountryToDisplay,
  SelectMemoisedCountries,
} from "../../store/country/country.selector";
import { SelectMode } from "../../store/mode/mode.selector";
import {
  BorderBox,
  BorderBoxElements,
  BorderBoxTitle,
  BorderButton,
  CountryBox,
  CountryContent,
  CountryContentBox,
  CountryCountainer,
  CountryImage,
  CountryItemCountainer,
  CountryPrimaryBox,
  CountrySecondaryBox,
  CountryTag,
  CountryTitle,
} from "./country-page.styles";

const CountryPage = ({ pageStyle }) => {
  const param = useParams();
  const { country_name } = param;
  const [displayCountry, setDisplayCountry] = useState([]);

  // const countryDisaplay = useSelector(SelectCountryToDisplay);
  const countriesObject = useSelector(SelectMemoisedCountries);
  useEffect(() => {
    console.log(countriesObject[country_name]);
    setDisplayCountry(countriesObject[country_name]);
  }, []);

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
  } = countriesObject[country_name].otherProps;

  const defaultPageStyle = {
    color: "white",
    backgroundColor: " hsl(207, 26%, 17%)",
  };

  const modeChange = useSelector(SelectMode);

  const [itemStyle, setItemStyle] = useState(defaultPageStyle);
  useEffect(() => {
    if (!modeChange) return;
    setItemStyle(modeChange.home);
  }, [modeChange]);

  return (
    <CountryCountainer style={{ ...itemStyle }}>
      <CountryImage src={`${displayCountry.flag}`} />{" "}
      <CountryBox>
        <CountryTitle>{displayCountry.name}</CountryTitle>
        <CountryPrimaryBox>
          <CountryContentBox>
            <CountryTag>Native Name:</CountryTag>
            <CountryContent>{nativeName}</CountryContent>
          </CountryContentBox>
          <CountryContentBox>
            <CountryTag>Population:</CountryTag>
            <CountryContent>{population}</CountryContent>
          </CountryContentBox>
          <CountryContentBox>
            <CountryTag>Region:</CountryTag>
            <CountryContent>{region}</CountryContent>
          </CountryContentBox>
          <CountryContentBox>
            <CountryTag>Sub Region:</CountryTag>
            <CountryContent>{subregion}</CountryContent>
          </CountryContentBox>
          <CountryContentBox>
            <CountryTag>Capital:</CountryTag>
            <CountryContent>{capital}</CountryContent>
          </CountryContentBox>
        </CountryPrimaryBox>

        <CountrySecondaryBox>
          <CountryContentBox>
            <CountryTag>Top Level Domain:</CountryTag>
            <CountryContent>{topLevelDomain}</CountryContent>
          </CountryContentBox>
          <CountryContentBox>
            <CountryTag>Currencies:</CountryTag>
            <CountryContent>{currencies.name}</CountryContent>
          </CountryContentBox>
          <CountryContentBox>
            <CountryTag>Language:</CountryTag>
            <CountryContent>
              {languages.map((element) => {
                return `${element.name}, `;
              })}
            </CountryContent>
          </CountryContentBox>
        </CountrySecondaryBox>
        <BorderBox>
          <BorderBoxTitle>Border Counties:</BorderBoxTitle>
          <BorderBoxElements>
            <BorderButton>france</BorderButton>
            <BorderButton>germany</BorderButton>
            <BorderButton>netherlands</BorderButton>
          </BorderBoxElements>
        </BorderBox>
      </CountryBox>
    </CountryCountainer>
  );
};

export default CountryPage;
