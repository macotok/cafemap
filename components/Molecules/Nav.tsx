import React from 'react';
import Link from 'next/link';

interface NavList {
  href: string;
  text: string;
}

const navList = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/login',
    text: 'Login'
  },
]


const Nav: React.FunctionComponent = (): JSX.Element => (
  <nav>
    <ul className="nav nav-pills nav-fill">
      {
        navList.map((nav: NavList, index: number) => (
          <li className="nav-item" key={index}>
            <Link href={nav.href}>
              <a className={`nav-link ${index === 0 ? 'active' : ''}`}>{nav.text}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Nav;
