import "./style.css";
import { useEffect, useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  {name: "Bihar", value: "PT", cities: ["Patna", "India"] }
];

const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    console.log(country[0]);
  }, [country]);

  return (
    <div className="country-list">
      {/* 1st DropDown */}
      <select value = {country} onChange = {(e) => {
          //console.log(e.target.value);
          setCountry([e.target.value]);
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key = {index} value = {index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* 2nd DropDown */}
      <select>
        {countries[country] && countries[country].cities.map((item, index) => {
            return <option value = {index}>{item}</option>;
          })}
      </select>
    </div>
  );
};

export default Country;
