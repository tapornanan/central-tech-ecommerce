import * as React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  height: 50px;
  width: 100%;
`;

const Nav = () => (
  <NavStyled>
    <div className="container">
      <h4>Logo</h4>
    </div>
  </NavStyled>
);

export default Nav;
