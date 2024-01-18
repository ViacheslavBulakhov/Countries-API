/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FiltersBox from "../components/Filters/FiltersBox";
import ListByCountry from "../components/ListByCountry/ListByCountry";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import { useStore } from "../zustand/store";

const HomePage = ({ countries, setCountries }) => {
  const [filtredCountries, setFilteredCountries] = useState(countries);
  const getCountries = useStore((state) => state.setCountries);
  const data = useStore((state) => state.countries);

  useEffect(() => {
    if (!data.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => getCountries(data));
    // eslint-disable-next-line
  }, []);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((item) => item.region.includes(region));
    }

    if (search) {
      data = data.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  // useEffect(() => {
  //   if (!countries.length)
  //     axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   handleSearch();
  //   // eslint-disable-next-line
  // }, [countries]);

  return (
    <>
      <FiltersBox handleSearch={handleSearch} />
      <ListByCountry data={data} />
    </>
  );
};

export default HomePage;
