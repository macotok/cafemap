import React from 'react';
import BaseLayout from '../components/Layouts/BaseLayout';
import HeaderBlock from '../components/Molecules/Header/HeaderBlock';
import AreaSelect from '../components/Organisms/Form/AreaSelect';

const Home: React.FC = (): JSX.Element => (
  <>
    <BaseLayout>
      <HeaderBlock />
      <AreaSelect />
    </BaseLayout>
  </>
);

export default Home;
