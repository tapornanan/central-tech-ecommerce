import * as React from 'react';
import Nav from '@/components/layouts/Nav';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

export default MainLayout;
