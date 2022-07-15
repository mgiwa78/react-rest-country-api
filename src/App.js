import logo from "./logo.svg";
import "./App.css";
import { fetchdata } from "./utils/utils";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useDispatch } from "react-redux/es/exports";
import { SetCountriesAction } from "./store/country/country.action";
import { useEffect } from "react";
import CountryDirectry from "./components/country-directory/country.directory";
import Header from "./components/header/header.component";
import { NavActionsContainer } from "./components/nav-actions/nav.actions.styles";
import NavActions from "./components/nav-actions/nav.actions.component";
import Home from "./components/home/home.component";

function App() {
  const dispatch = useDispatch();

  const fetchSetchCountries = async () => {
    const countriesData = await fetchdata();
    dispatch(SetCountriesAction(countriesData));
  };

  useEffect(() => {
    fetchSetchCountries();
  }, []);

  return (
    <div className="App">
      <Home className="bg-gray-900 h-screen" />
    </div>
  );
}

export default App;
