import React, { useState } from "react";
import Media from "react-media";

import { useAppDispatch, useAppSelector } from "../../hook";
import { switchTheme } from "../../store/themeSlice";
import Select from "../UI/Select/Select";
import s from "./Header.module.scss";
import Nav from "./Nav/Nav";
import User from "./User/User";

const selectTheme = [
  { value: "auto", label: "Тема по умолчанию" },
  { value: "light", label: "Светлая тема" },
  { value: "dark", label: "Тёмная тема" },
];

const Header: React.FC = ({}) => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(theme);

  const switchThemeHandler = (e: any) => {
    dispatch(switchTheme(e.target.value));
    if (e.target.value === "auto") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", e.target.value);
    }
  };

  return (
    <header className={s.header}>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => {
          if (matches.medium || matches.large) {
            return (
              <>
                <Select
                  options={selectTheme}
                  value={theme}
                  onChange={switchThemeHandler}
                  className={s.select}
                />
                <Nav />
              </>
            );
          }
          if (matches.small) {
            return <p className={s.select}>burger</p>;
          }
        }}
      </Media>

      <User />
    </header>
  );
};

export default Header;
