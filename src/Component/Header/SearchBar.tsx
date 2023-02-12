import React from "react";
import { Navbar } from "react-bootstrap";
import { NavMenu, SearchField } from "./SearchBarStyledComponent";

type SearchBarProps = {
  setSearchGif: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ setSearchGif }) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavMenu className="mr-auto">
          <SearchField
            type="text"
            placeholder="Search"
            onChange={(text: any) => setSearchGif(text.target.value)}
          />
        </NavMenu>
      </Navbar>
    </div>
  );
};

export default SearchBar;
