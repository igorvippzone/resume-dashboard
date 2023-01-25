import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { switchTheme } from "./store/themeSlice";
import { Routes, Route } from "react-router-dom";

import { AboutMenu, Header } from "./components";
import { HomePage, UserPage } from "./pages";

const body = document.querySelector("body");

const App: React.FC = () => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const { theme, aboutMenu } = useAppSelector((state) => state.theme);

  useEffect(() => {
    body?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage/>} />
        </Routes>
        {aboutMenu && <AboutMenu />}
      </main>
    </>
  );
};

export default App;
