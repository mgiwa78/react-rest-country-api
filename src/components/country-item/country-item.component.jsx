import { useNavigate } from "react-router-dom";
import {
  CountryBox,
  CountryContent,
  CountryContentBox,
  CountryImage,
  CountryItemCountainer,
  CountryTag,
  CountryTitle,
} from "./country-item.styles";

const CountryItem = ({ country, itemStyle }) => {
  const { capital, population, region } = country.otherProps;

  const navigate = useNavigate();
  const handlePageChnge = () => {
    navigate(`/country/${country.name}`);
  };

  return (
    <CountryItemCountainer
      onClick={() => handlePageChnge()}
      style={{ ...itemStyle }}
    >
      <CountryImage src={`${country.flag}`} />{" "}
      <CountryBox>
        <CountryTitle>{country.name}</CountryTitle>
        <CountryContentBox>
          <CountryTag>Population:</CountryTag>
          <CountryContent>{population}</CountryContent>
        </CountryContentBox>
        <CountryContentBox>
          <CountryTag>Region:</CountryTag>
          <CountryContent>{region}</CountryContent>
        </CountryContentBox>
        <CountryContentBox>
          <CountryTag>Capital:</CountryTag>
          <CountryContent>{capital}</CountryContent>
        </CountryContentBox>
      </CountryBox>
    </CountryItemCountainer>
  );
};

export default CountryItem;
