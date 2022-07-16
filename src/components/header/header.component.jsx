import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetViewMode } from "../../store/mode/mode.action";
import { SelectMode } from "../../store/mode/mode.selector";
import {
  HeaderContainer,
  HeaderText,
  HeaderToggle,
} from "./header.styles";

const Header = () => {
  const dispatch = useDispatch();

  const modeChange = useSelector(SelectMode);
  const modes = {
    dark: {
      id: "dark",
      elements: {
        color: "white",
        backgroundColor: "hsl(209, 23%, 22%)",
      },
      home: {
        color: "white",

        backgroundColor: "hsl(207, 26%, 17%)",
      },
      btn: {
        color: "#ffffffae",

        backgroundColor: "hsl(209, 23%, 22%)",
      },
    },
    light: {
      id: "light",
      elements: {
        color: "hsl(200, 15%, 8%)",
        backgroundColor: "hsl(0, 0%, 100%)",
        id: "light",
      },
      home: {
        color: "hsl(200, 15%, 8%)",

        backgroundColor: "hsl(0, 0%, 98%)",
      },
      btn: {
        color: "hsl(200, 15%, 8%)",

        backgroundColor: "hsl(0, 0%, 100%)",
      },
    },
  };
  const defaultState = modes.dark;
  const [modeState, setModeState] = useState({ ...defaultState });

  useEffect(() => {
    if (!modeChange) return;
    setModeState(modeChange);
  }, [modeChange]);

  const handleModeChange = (e) => {
    e.preventDefault();
    modeState.id === "dark"
      ? dispatch(SetViewMode(modes.light))
      : dispatch(SetViewMode(modes.dark));
  };

  return (
    <HeaderContainer style={{ ...modeState.elements }}>
      <HeaderText> Where in the world</HeaderText>
      <HeaderToggle
        style={{ ...modeState.elements }}
        onClick={(e) => handleModeChange(e)}
        value="dark"
      >
        <span
          style={{
            ...modeState.elements,
          }}
        >
          Darkmode
        </span>
      </HeaderToggle>
    </HeaderContainer>
  );
};

export default Header;
