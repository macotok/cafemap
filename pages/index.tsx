import React from 'react';
import BaseLayout from '../components/Layouts/BaseLayout';
import Header from '../components/Molecules/Header';
import AreaSelect from '../components/Organisms/Form/AreaSelect';

const Home: React.FunctionComponent = (): JSX.Element => (
  <>
    <BaseLayout>
      <Header />
      <AreaSelect />
    </BaseLayout>
  </>
);

export default Home;
