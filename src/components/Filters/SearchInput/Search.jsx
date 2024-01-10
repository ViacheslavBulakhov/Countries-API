import { IoSearch } from "react-icons/io5";
import { SearchInput, SearchInputWrap } from "./SerachStyled";

const Search = ({ search, setSearch }) => {
  return (
    <SearchInputWrap>
      <IoSearch />
      <SearchInput onChange={(e) => setSearch(e.target.value)} value={search} />
    </SearchInputWrap>
  );
};

export default Search;
