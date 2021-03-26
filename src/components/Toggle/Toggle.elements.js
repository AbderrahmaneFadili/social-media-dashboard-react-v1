import styled from "styled-components";

//Toggle Container : label
export const ToggleContainer = styled.label`
  position: relative;
  width: 70px;
  height: 34px;
`;

//ToggleInput
export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ span:last-child {
    transform: translateX(-34px);
  }
`;

//Slider
export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: ${({ themeMode, theme }) =>
    themeMode === "light"
      ? theme.toggleBackground
      : `transparent linear-gradient(
      101deg,
      rgba(55, 143, 230, 1) 15%,
      rgba(62, 218, 130, 1) 72%
    );`};
  transition: background 0.4s;
  cursor: pointer;
  border-radius: 5rem;
  z-index: 1;
`;

//Slider Overlay
export const SliderOverlay = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  border-radius: 5rem;
  background: transparent
    linear-gradient(
      101deg,
      rgba(55, 143, 230, 1) 15%,
      rgba(62, 218, 130, 1) 72%
    );
  opacity: 0;
  transition: opacity 0.4s;
  cursor: pointer;

  //on hover
  &:hover {
    opacity: 1;
  }
`;

//Circle
export const Circle = styled.span`
  position: absolute;
  width: 26px;
  height: 26px;
  right: 5px;
  bottom: 4px;
  background-color: ${({ theme }) => theme.topBackgroundPattern};
  border-radius: 5rem;
  transition: all 0.4s;
  z-index: 3;
  cursor: pointer;
`;
