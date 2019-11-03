import React from 'react';
import BaseLayout from '../components/Layouts/BaseLayout';
import Header from '../components/Molecules/Header';

const Home: React.FunctionComponent = (): JSX.Element => (
  <>
    <BaseLayout>
      <Header />
    </BaseLayout>
  </>
);

export default Home;
