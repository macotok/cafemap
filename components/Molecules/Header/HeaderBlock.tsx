import React from 'react';
import H1Title from '../../Atoms/Title/H1Title';
import Nav from './Nav';

const HeaderBlock: React.FC = (): JSX.Element => (
  <>
    <H1Title />
    <Nav />
  </>
);

export default HeaderBlock;
