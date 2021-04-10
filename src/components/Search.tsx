import * as React from 'react';
import { useState, useEffect } from 'react';

interface ISearch {
  handleFilter: ({ query, color }: { query: string; color: string }) => void;
  colors: string[];
}

const Search: React.FC<ISearch> = ({ handleFilter, colors }) => {
  const [query, setQuery] = useState(``);
  const [color, setColor] = useState(``);

  useEffect(() => {
    handleFilter({ query, color });
  }, [query]);

  useEffect(() => {
    handleFilter({ query, color });
  }, [color]);

  return (
    <div className="search-wrapper">
      <div className="form">
        <label htmlFor="search-input" className="label">
          Search product
          <input
            type="text"
            name="query"
            className="input"
            id="search-input"
            placeholder="Keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label htmlFor="search-color" className="label">
          Filter by product color
          <select
            className="select"
            name="color"
            onChange={(e) => setColor(e.target.value)}
            id="search-color"
          >
            <option disabled selected value="null">
              Filter by Color
            </option>
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Search;
