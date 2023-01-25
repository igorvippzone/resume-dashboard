import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  theme: string;
  aboutMenu: boolean;
};

const localTheme = localStorage.getItem("theme");
const autoTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const initialState: ThemeState = {
  theme: localTheme || autoTheme,
  aboutMenu: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<"light" | "dark" | "auto">) {
      if (action.payload === "auto") {
        state.theme = autoTheme;
      } else {
        state.theme = action.payload;
      }
    },
    showAboutMenu(state) {
      state.aboutMenu = !state.aboutMenu;
    },
  },
});

export const { switchTheme, showAboutMenu } = themeSlice.actions;

export default themeSlice.reducer;
