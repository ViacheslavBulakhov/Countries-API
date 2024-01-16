/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FiltersBox from "../components/Filters/FiltersBox";
import ListByCountry from "../components/ListByCountry/ListByCountry";

const HomePage = ({ countries }) => {
  const [filtredCountries, setFilteredCountries] = useState(countries);

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

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <FiltersBox handleSearch={handleSearch} />
      <ListByCountry data={filtredCountries} />
    </>
  );
};

export default HomePage;
