import React from 'react';
import H1Title from '@/components/Atoms/Title/H1Title';
import Nav from '@/components/Molecules/Header/Nav';

const HeaderBlock: React.FC = (): JSX.Element => (
  <>
    <H1Title />
    <Nav />
  </>
);

export default HeaderBlock;
