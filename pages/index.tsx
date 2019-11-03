import React from 'react';
import BaseLayout from '../components/Layouts/BaseLayout';
import Link from "next/link";

const Home: React.FunctionComponent = (): JSX.Element => (
  <>
    <BaseLayout>
      <h1>Cafe Map</h1>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </BaseLayout>
  </>
);

export default Home;
