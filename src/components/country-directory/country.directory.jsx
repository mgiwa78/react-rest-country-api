import React, { useEffect, useState } from "react";
import CountryItem from "../country-item/country-item.component";
import { CountryDirectryContainer } from "./country.directory.style";

import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  SelectCountriesArray,
  SelectCountriesFilter,
} from "../../store/country/country.selector";
import { SelectMode } from "../../store/mode/mode.selector";

const CountryDirectry = () => {
  const CountiresArray = useSelector(SelectCountriesArray);
  const FilteredCountiresArray = useSelector(SelectCountriesFilter);

  const [coutriesDisplay, setCoutriesDisplay] = useState(CountiresArray);

  useEffect(() => {
    if (!FilteredCountiresArray) return;
    setCoutriesDisplay(FilteredCountiresArray);
  }, [FilteredCountiresArray]);

  useEffect(() => {
    if (!CountiresArray) return;
    setCoutriesDisplay(CountiresArray);
  }, [CountiresArray]);
  const dispatch = useDispatch();

  const modeChange = useSelector(SelectMode);

  const defaultItemStyle = {
    color: "white",
    backgroundColor: " hsl(209, 23%, 22%)",
  };
  const [itemStyle, setItemStyle] = useState(defaultItemStyle);

  useEffect(() => {
    if (!modeChange) return;
    console.log(modeChange);
    setItemStyle(modeChange.elements);
  }, [modeChange]);

  return (
    <CountryDirectryContainer>
      {coutriesDisplay?.map((country) => (
        <CountryItem
          itemStyle={itemStyle}
          key={country.id}
          country={country}
        ></CountryItem>
      ))}
    </CountryDirectryContainer>
  );
};

export default CountryDirectry;
