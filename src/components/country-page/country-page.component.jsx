import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { SelectMemoisedCountries } from "../../store/country/country.selector";
import { SelectMode } from "../../store/mode/mode.selector";
import {
  BackButton,
  BorderBox,
  BorderBoxElements,
  BorderBoxTitle,
  BorderButton,
  CountryBox,
  CountryContent,
  CountryContentBox,
  CountryCountainer,
  CountryDetailsBox,
  CountryDetailsTop,
  CountryImage,
  CountryPrimaryBox,
  CountrySecondaryBox,
  CountryTag,
  CountryTitle,
} from "./country-page.styles";

const CountryPage = ({ pageStyle }) => {
  const navigate = useNavigate();
  const param = useParams();
  const { country_name } = param;
  const [displayCountry, setDisplayCountry] = useState([]);

  // const countryDisaplay = useSelector(SelectCountryToDisplay);
  const countriesObject = useSelector(SelectMemoisedCountries);
  useEffect(() => {
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
  const defaultBtnStyle = {
    color: "#ffffffae",
    backgroundColor: " hsl(209, 23%, 22%)",
  };
  const modeChange = useSelector(SelectMode);

  const [itemStyle, setItemStyle] = useState(defaultPageStyle);
  const [btnStyle, setBtnStyle] = useState(defaultBtnStyle);
  useEffect(() => {
    if (!modeChange) return;
    setItemStyle(modeChange.home);
    setBtnStyle(modeChange.btn);
  }, [modeChange]);

  const handleBack = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <CountryCountainer style={{ ...itemStyle }}>
      <BackButton onClick={(e) => handleBack(e)} style={{ ...btnStyle }}>
        back
      </BackButton>
      <CountryBox>
        <CountryImage src={`${displayCountry.flag}`} />
        <CountryDetailsBox>
          <CountryDetailsTop>
            <CountryPrimaryBox>
              {" "}
              <CountryTitle>{displayCountry.name}</CountryTitle>
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
          </CountryDetailsTop>

          <BorderBox>
            <BorderBoxTitle>Border Counties:</BorderBoxTitle>
            {borders ? (
              <BorderBoxElements>
                {borders.map((border) => (
                  <BorderButton style={{ ...btnStyle }} key={border}>
                    {border}
                  </BorderButton>
                ))}
              </BorderBoxElements>
            ) : (
              <BorderBoxElements>
                <BorderButton style={{ ...btnStyle }}>None</BorderButton>
              </BorderBoxElements>
            )}
          </BorderBox>
        </CountryDetailsBox>
      </CountryBox>
    </CountryCountainer>
  );
};

export default CountryPage;
