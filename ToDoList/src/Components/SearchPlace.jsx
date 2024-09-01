import React, { useRef } from "react";
import searchLogo from "/icons/search.svg";
import downLogo from "/icons/down-arrow.svg";
import nightLogo from "/icons/dark.svg";
import sunLogo from "/icons/light.svg";

function SearchPlace({
  displayAddTaskUI,
  getSearch,
  showAllTask,
  changeMode,
  lightswitch,
}) {
  const searchInput = useRef();

  return (
    <div className="w-[70%] lg:w-[50%] mt-4 flex justify-center items-center space-x-4">
      <div className="w-2/3 relative">
        <input
          ref={searchInput}
          onChange={(e) => {
            getSearch(e.target.value);
          }}
          placeholder="Search note..."
          className="w-full px-4 py-1 border-2 border-indigo-400 outline-none"
        />
        <img
          src={searchLogo}
          className="size-6 absolute right-2 top-[50%] translate-y-[-50%]"
          alt="searchIcon"
        />
      </div>
      <button
        onClick={() => {
          showAllTask();
          searchInput.current.value = "";
        }}
        className="px-3 py-1 flex items-center space-x-1 bg-indigo-500 rounded-md text-white"
      >
        <p>ALL</p>
        <img className="size-5" src={downLogo} alt="downArrow" />
      </button>
      <button
        onClick={changeMode}
        className="px-3 py-1 bg-indigo-500 rounded-md"
      >
        <img
          className="w-6 h-6"
          src={lightswitch ? nightLogo : sunLogo}
          alt="lightswitch"
        />
      </button>
      <button
        onClick={displayAddTaskUI}
        className="px-3 py-1 text-white bg-indigo-500 rounded-full"
      >
        +
      </button>
    </div>
  );
}

export default SearchPlace;
