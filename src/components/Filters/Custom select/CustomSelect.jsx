import { useDispatch, useSelector } from "react-redux";
import { CustomSelectEl } from "./CustomSelectStyled";
import { onSelect } from "../../../redux/CountrySlice";
import { selectFilters } from "../../../redux/Selectors";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const CustomSelect = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onChangeSelect = (e) => {
    dispatch(onSelect(e));
  };

  return (
    <CustomSelectEl
      options={options}
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
      value={filters.select}
      onChange={onChangeSelect}
    />
  );
};

export default CustomSelect;
