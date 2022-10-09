import Colors from "./colors.styled";

const setMode = (mode) => {
  if (["light", "dark"].includes(mode)) return mode;
  return "light";
};

export const createTheme = (mode = "light") => {
  const validMode = setMode(mode);
  return {
    palette: Colors[validMode],
  };
};

export default createTheme;
