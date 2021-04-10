import * as React from 'react';
import Nav from '@/components/layouts/Nav';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Nav />
    <div className="container">{children}</div>
  </>
);

export default MainLayout;
