import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectMode } from "../../store/mode/mode.selector";
import { SetCountriesFilter } from "../../store/country/country.action";
import { SelectCountriesArray } from "../../store/country/country.selector";
import { fetchdata } from "../../utils/utils";
import {
  NavActionsContainer,
  NavDropdown,
  NavDropdownOption,
  NavSearch,
} from "./nav.actions.styles";

const NavActions = () => {
  const dispatch = useDispatch();
  const countries = useSelector(SelectCountriesArray);
  const defaultField = {
    search: "",
    select: "Filter by Region",
  };

  const [Formfields, setFormFields] = useState(defaultField);
  const { search, select } = Formfields;
  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormFields({ ...Formfields, [name]: [value] });

    if (name === "select") {
      if (!countries) return;

      const newFilteredCouintries = countries.filter(
        (country) => country.otherProps.region === `${value}`
      );

      dispatch(SetCountriesFilter(newFilteredCouintries));
    }
  };
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const conty = search[0].toLowerCase();

    try {
      const searchResult = await fetchdata(
        `https://restcountries.com/v2/name/${conty}`
      );
      dispatch(SetCountriesFilter(searchResult));
    } catch (error) {
      alert(error);
    }
  };

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
    <NavActionsContainer>
      <form onSubmit={(e) => handleSearchSubmit(e)}>
        <NavSearch
          styleId={itemStyle.id}
          name="search"
          value={search}
          onChange={(e) => handleChange(e)}
          style={{ ...itemStyle }}
          placeholder={"Search"}
        />
      </form>

      <NavDropdown
        name="select"
        placeholder="Filter by region"
        style={{ ...itemStyle }}
        title="Selet"
        label="option"
        value={select}
        onChange={(e) => handleChange(e)}
      >
        <NavDropdownOption>Africa</NavDropdownOption>
        <NavDropdownOption>Americas</NavDropdownOption>
        <NavDropdownOption>Europe</NavDropdownOption>
        <NavDropdownOption>Asia</NavDropdownOption>
        <NavDropdownOption>Oceania</NavDropdownOption>
      </NavDropdown>
    </NavActionsContainer>
  );
};

export default NavActions;
