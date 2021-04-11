import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { store } from '@/store/store';

const Nav = () => {
  const {
    state: { cart },
  } = useContext(store);

  return (
    <nav className="nav">
      <div className="container w-100">
        <div className="nav-menus">
          <Link href="/">
            <h4 className="logo">🏪 e-commerce</h4>
          </Link>
          <div className="menus">
            <Link href="/cart">
              <a className="button">🛍️ Cart ({cart?.products.length})</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
