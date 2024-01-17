/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FiltersBoxWrap } from "./FiltersBoxStyled";
import Search from "./SearchInput/Search";
import CustomSelect from "./Custom select/CustomSelect";

const FiltersBox = ({ handleSearch }) => {
  // const [search, setSearch] = useState("");
  // const [region, setRegion] = useState("");

  // useEffect(() => {
  //   const regionValue = region?.value || "";
  //   handleSearch(search, regionValue);

  //   // eslint-disable-next-line
  // }, [search, region]);

  return (
    <FiltersBoxWrap>
      <Search />
      <CustomSelect />
    </FiltersBoxWrap>
  );
};

export default FiltersBox;
