import { useEffect } from "react";
import FiltersBox from "../components/Filters/FiltersBox";
import ListByCountry from "../components/ListByCountry/ListByCountry";

import { useStore } from "../zustand/store";

const HomePage = () => {
  const getCountries = useStore((state) => state.setCountries);
  const countries = useStore((state) => state.countries);

  const region = useStore((state) => state.filters.region);
  const search = useStore((state) => state.filters.search);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const regionValue = region?.value || "";

  const getFilteredData = countries.filter(
    (item) =>
      item.region.includes(regionValue) &&
      item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <FiltersBox />
      <ListByCountry data={getFilteredData} />
    </>
  );
};

export default HomePage;
