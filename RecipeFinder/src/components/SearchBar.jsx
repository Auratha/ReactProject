import searchLogo from "../assets/search.png";

const SearchBar = ({ handleChange, searchClick }) => {
  return (
    <div className="py-5 flex justify-center">
      <input
        className="px-6 py-1 rounded-lg bg-gray-200 outline-none "
        type="text"
        name="search"
        id="search"
        placeholder="Search for recipe..."
        onChange={handleChange}
      />
      <img
        className="ml-4 size-8 bg-gray-200 rounded-full"
        src={searchLogo}
        alt="search icon"
        onClick={searchClick}
      />
    </div>
  );
};

export default SearchBar;
