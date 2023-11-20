import React, {useState} from "react";

const SearchBar = () => {

  const [query, setQuery] = useState("");

    function searchPokemonType(element: string) {
        // element.preventDefault()
        setQuery(element.valueOf)
    }

    return (
      <div className="content-search-bar">
        <input type="text"
               className="input-search"
               placeholder="Search"
               onChange={searchPokemonType}
               value={query}
        />
      </div>

    );
};

export default SearchBar;