import { FC } from "react";
import User from "../Header/User/User";
import userPhoto from "../../assets/images/user.webp";
import s from "./AboutMenu.module.scss";
import { MdLocationOn } from "react-icons/md";
import {BsTelegram,BsTelephoneFill,BsMailbox2} from 'react-icons/bs'

const AboutMenu: FC = () => {
  return (
    <aside className={s.menu}>
      <img src={userPhoto} style={{ width: "100%" }} loading='lazy' />
      <div className={s.description}>
        <h1>Игорь Агаларов</h1>
        <p className={s.location}>
          <MdLocationOn /> Россия, Нижний Новгород
        </p>
        <h3>Frontend-разработчик</h3>
        <ul>
          <li>
            <p>Плейбой</p>
          </li>
          <li>
            <p>Миллионер</p>
          </li>
          <li>
            <p>Милиардер</p>
          </li>
          <li>
            <p>Изобретатель</p>
          </li>
        </ul>

        <p>
          Данного персонажа заинтересовало программирование в далёком 2019 году.
          И по сей день он только этим и живет.
        </p>
<p><BsTelegram /><a href="#">@goshanVip</a></p>
<p><BsTelephoneFill /> <a href="#">+7 930 702 12 12</a></p>
       <p><BsMailbox2 /> <a href="#">igorvippzone@gmail.com</a></p>
        <br />
       
     
        
      </div>
    </aside>
  );
};

export default AboutMenu;
