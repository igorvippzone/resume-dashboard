import { FC, useEffect } from "react";
import axios from "axios";

import Card from "../../UI/Card/Card";

type WeatherProps = {
  className?: string;
};

const WidgetWeather: FC<WeatherProps> = ({ className = "" }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });

    function success({ coords }: any) {
      const { latitude, longitude } = coords;
      console.log(coords)
    }

    function error({ message }: any) {}
  }, []);
useEffect(()=>{
  axios
  .get(
    ` https://api.geotree.ru/address.php?limit=1&lat=56.324133&lon=44.005299`
  )
  .then((res) => {
    console.log(res.data);
  });
},[])
  

  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=56.33&longitude=43.92&current_weather=true`
    )
    .then((res) => {
      // console.log(res.data);
    });

  axios
    .get(
      `https://api.open-meteo.com/v1/dwd-icon?latitude=56.33&longitude=43.92&current_weather=true`
    )
    .then((res) => {
      // console.log(res.data);
    });
  return <Card className={className}>WidgetWeather</Card>;
};

export default WidgetWeather;
