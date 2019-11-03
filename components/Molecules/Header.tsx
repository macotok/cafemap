import React from 'react';
import H1Title from '../Atoms/Title/H1Title';
import Nav from '../Molecules/Nav';

const Header: React.FunctionComponent = (): JSX.Element => (
  <>
    <H1Title />
    <Nav />
  </>
);

export default Header;
