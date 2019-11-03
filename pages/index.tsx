import React from 'react';

const sum = (a: number, b: number): number => a + b;

const Home = (): JSX.Element => (
  <>
    <h1>Hello, World</h1>
    {sum(1,3)}
  </>
);

export default Home;
