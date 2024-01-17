import { IoSearch } from "react-icons/io5";
import { SearchInput, SearchInputWrap } from "./SerachStyled";
import { onSearch } from "../../../redux/countrySlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <SearchInputWrap>
      <IoSearch />
      <SearchInput onChange={(e) => dispatch(onSearch(e.target.value))} />
    </SearchInputWrap>
  );
};

export default Search;
