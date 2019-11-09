import React from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import HeaderBlock from '../components/Molecules/Header/HeaderBlock';
import AreaSelect from '../components/Organisms/Form/AreaSelect';

const Home: React.FC = (): JSX.Element => (
  <>
    <DefaultLayout>
      <HeaderBlock />
      <AreaSelect />
    </DefaultLayout>
  </>
);

export default Home;
