import { store } from '@/store/store';
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

interface ISearch {
  handleFilter: ({ query, color }: { query: string; color: string }) => void;
}

const Search: React.FC<ISearch> = ({ handleFilter }) => {
  const {
    state: { colors },
  } = useContext(store);

  const [query, setQuery] = useState(``);
  const [color, setColor] = useState(``);

  useEffect(() => {
    handleFilter({ query, color });
  }, [query, color]);

  return (
    <div className="search-wrapper">
      <div className="form">
        <label htmlFor="search-input" className="label">
          <input
            type="text"
            name="query"
            className="input"
            id="search-input"
            placeholder="Search product name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label htmlFor="search-color" className="label">
          <select
            className="select"
            name="color"
            onChange={(e) => setColor(e.target.value)}
            id="search-color"
            value={color}
          >
            <option value="">All Colors</option>
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
