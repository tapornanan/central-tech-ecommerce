import * as React from 'react';
import Nav from '@/components/layouts/Nav';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Nav />
    <div className="container mt-5">{children}</div>
  </>
);

export default MainLayout;
