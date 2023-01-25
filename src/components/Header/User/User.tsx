import React, { useEffect, useState } from "react";

import userPhoto from "../../../assets/images/user.webp";
import { useAppDispatch } from "../../../hook";
import { showAboutMenu } from "../../../store/themeSlice";
import s from "./User.module.scss";

const User: React.FC = () => {
  const dispatch = useAppDispatch();
  const showAboutMenuHandler = () => {
    dispatch(showAboutMenu());
  };

  return (
    <div className={s.user}>
      <div className={s.description}>
        <p>Игорь Агаларов</p>
        <p className={s.age}>28 лет</p>
      </div>
      <div className={s.photo} onClick={showAboutMenuHandler}>
        <img src={userPhoto} alt="user" />
      </div>
    </div>
  );
};

export default User;
