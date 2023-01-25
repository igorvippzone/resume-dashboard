import React from "react";

import { Card } from "../../components";

import s from "./HomePage.module.scss";
import BarCharts from "../../components/charts/BarCharts";
import WidgetWeather from "../../components/widgets/WidgetWeather/WidgetWeather";
import previewImg from "../../assets/images/previewWEatherApp.webp";
import Currency from "../../components/Currency/Currency";
const HomePage: React.FC = () => {

  return (
    <div className={s.grid}>
      <div className={s.one}>
        <div className={s.cards}>
        <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div><div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div><div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div><div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div><div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <img
              src={previewImg}
              style={{ width: "100%",}}
            />
            <h2>Приложение погоды</h2>
          </div>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
        </div>
      </div>

      <WidgetWeather className={s.two} />

      <Card className={s.three}>
        <Currency />
      </Card>
    </div>
  );
};

export default HomePage;
