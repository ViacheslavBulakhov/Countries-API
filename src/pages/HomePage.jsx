/* eslint-disable react/prop-types */
import FiltersBox from "../components/Filters/FiltersBox";
import ListByCountry from "../components/ListByCountry/ListByCountry";
import { useSelector } from "react-redux";
import { selectFilters } from "../redux/selectors.js";

const HomePage = ({ countries }) => {
  const filters = useSelector(selectFilters);

  const getFilteredCountries = countries.filter(
    ({ name, region }) =>
      name.common.toLowerCase().includes(filters.search.toLowerCase()) &&
      region.includes(filters.select?.value || "")
  );

  return (
    <>
      <FiltersBox />
      <ListByCountry data={getFilteredCountries} />
    </>
  );
};

export default HomePage;
