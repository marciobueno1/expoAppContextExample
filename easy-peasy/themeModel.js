import { action } from "easy-peasy";

export const themes = {
  light: {
    color: "gray",
  },
  dark: {
    color: "black",
  },
};

function isSameTheme(theme1, theme2) {
  return theme1.color === theme2.color;
}

export const themeModel = {
  mode: themes.dark,
  toggle: action((state) => {
    state.mode = isSameTheme(state.mode, themes.light)
      ? themes.dark
      : themes.light;
  }),
};
