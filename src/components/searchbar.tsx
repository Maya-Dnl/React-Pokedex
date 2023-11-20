import React, {useState} from "react";

const SearchBar = () => {

  const [userQuery, setUserQuery] = useState("");

    function searchPokemonType(element: string) {
      setUserQuery(element.valueOf)
    }

    return (
      <div className="content-search-bar">
        <input type="text"
               className="input-search"
               placeholder="Search"
               OnChange={searchPokemonType}
               value={userQuery}
        />
      </div>

    );
};

export default SearchBar;