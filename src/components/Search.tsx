import { store } from '@/store/store';
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

interface ISearch {
  handleFilter: ({
    query,
    color,
    size,
  }: {
    query: string;
    color: string;
    size: string;
  }) => void;
}

const Search: React.FC<ISearch> = ({ handleFilter }) => {
  const {
    state: { colors },
  } = useContext(store);
  const sizes = [`0 - 25`, `26 - 50`, `51 - 75`];

  const [query, setQuery] = useState(``);
  const [color, setColor] = useState(``);
  const [size, setSize] = useState(``);

  useEffect(() => {
    handleFilter({ query, color, size });
  }, [query, color, size]);

  return (
    <div className="search-wrapper">
      <div className="form">
        <label htmlFor="search-input" className="label mr-2">
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
        <label htmlFor="search-color" className="label mr-2">
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
        <label htmlFor="search-size" className="label">
          <select
            className="select"
            name="size"
            onChange={(e) => setSize(e.target.value)}
            value={size}
            id="search-size"
          >
            <option value="">All Sizes</option>
            {sizes.map((s) => (
              <option value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Search;
