import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectMode } from "../../store/mode/mode.selector";
import CountryDirectry from "../country-directory/country.directory";
import NavActions from "../nav-actions/nav.actions.component";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const defaultPageStyle = {
    backgroundColor: " hsl(207, 26%, 17%)",
  };

  const modeChange = useSelector(SelectMode);

  const [homeStyle, setHomeStyle] = useState(defaultPageStyle);

  useEffect(() => {
    if (!modeChange) return;
    console.log(modeChange);
    setHomeStyle(modeChange.home);
  }, [modeChange]);

  return (
    <HomeContainer style={{ ...homeStyle }}>
      <NavActions />
      <CountryDirectry />
    </HomeContainer>
  );
};

export default Home;
