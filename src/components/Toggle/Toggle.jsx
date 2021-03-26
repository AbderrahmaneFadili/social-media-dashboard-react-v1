import React from "react";
import {
  ToggleContainer,
  ToggleInput,
  Slider,
  SliderOverlay,
  Circle,
} from "./Toggle.elements";
import { useTheme } from "styled-components";
const Toggle = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" onChange={toggleTheme} />
      <Slider themeMode={theme.themeName} />
      <SliderOverlay />
      <Circle />
    </ToggleContainer>
  );
};

export default Toggle;
