import React, { useEffect, useState } from "react";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Input from "../UI/Input/Input";

interface ICurrency {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

const Currency = () => {
  const [value, setValue] = useState("100");
  const [currency, setCurrency] = useState<ICurrency[]>([]);
  console.log(currency);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((data) => {
        const res = data.Valute;
        console.log(res);

        setCurrency([res.USD,res.EUR, res.AZN,  res.BYN]);
      });
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      {currency.length ? (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Input
              type="number"
              min={1}
              max={999999999}
              value={value}
              onChange={changeHandler}
              style={{ flexShrink: 0 }}
            />
            <p style={{ margin: 0 }}>руб.</p>
          </div>

          <div>
            {currency.map((item) => {
              return (
                <div key={item.ID}>
                  <h3 style={{ margin: 0, marginTop: "10px" }}>{item.Name}</h3>
                  <p style={{ margin: 0, display: "flex" }}>
                    <span style={{ color: "var(--cyan)" }}>
                      {(+value / item.Value).toFixed(2)} {item.CharCode}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                      }}
                    >
                      (
                      {item.Previous > item.Value ? (
                        <BsCaretDownFill style={{ color: "var(--red)" }} />
                      ) : (
                        <BsCaretUpFill style={{ color: "var(--green)" }} />
                      )}
                      {item.Value.toFixed(2)} руб.)
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Currency;
