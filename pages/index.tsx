import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import HeaderBlock from '@/components/Molecules/Header/HeaderBlock';
import AreaSelect from '@/components/Organisms/Form/AreaSelect';
import CafeList from '@/components/Molecules/List/CafeList';

const Home: React.FC = (): JSX.Element => (
  <>
    <DefaultLayout>
      <HeaderBlock />
      <AreaSelect />
      <CafeList />
    </DefaultLayout>
  </>
);

export default Home;
