import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByCountry } from "../config";
import Button from "../components/Details/Button.jsx";
import CountryInfo from "../components/Details/CountryInfo";

const Details = () => {
  const [countryData, setCountryData] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    try {
      axios
        .get(searchByCountry(name))
        .then(({ data }) => structuredData(data[0]));
    } catch (error) {
      return;
    }
  }, [name]);

  const structuredData = (data) => {
    let nativeName = [];
    let languages = [];

    for (const key in data.name.nativeName) {
      nativeName.push(data.name.nativeName[key].common);
    }

    for (const key in data.languages) {
      languages.push(data.languages[key]);
    }

    setCountryData(() => ({ ...data, nativeName, languages }));
  };

  return (
    <>
      <Button />

      {countryData && <CountryInfo item={countryData} />}
    </>
  );
};

export default Details;
