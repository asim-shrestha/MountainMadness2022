import { FunctionComponent, useState } from "react";

const SearchBar: FunctionComponent = () => {
  const tubesStr = "Tubes and Tubes only.";
  const [numItems, setNumItems] = useState(0);

  return (
    <div className="col-sm-3 my-1">
      <div className="input-group" style={{ minWidth: "10rem", width: "150%" }}>
        <input
          type="text"
          className="form-control"
          id="inlineFormInputGroupUsername"
          placeholder="Search"
          value={tubesStr.substring(0, numItems)}
          onKeyDown={(e) => {
            if (e.code == "Backspace") {
              setNumItems(Math.max(0, numItems - 1));
            } else {
              setNumItems(Math.min(tubesStr.length, numItems + 1));
            }
          }}
        />
        <div className={"input-group-append"}>
          <a
            href="https://youtube-livid.vercel.app/"
            className="input-group-text pl-4 pr-4"
          >
            <img height="18px" alt="search" src="/search.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
