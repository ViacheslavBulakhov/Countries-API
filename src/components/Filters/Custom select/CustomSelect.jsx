import { CustomSelectEl } from "./CustomSelectStyled";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const CustomSelect = ({ region, setRegion }) => {
  return (
    <CustomSelectEl
      options={options}
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
      value={region}
      onChange={setRegion}
    />
  );
};

export default CustomSelect;
