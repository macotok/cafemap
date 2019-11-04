import * as React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutStyled from "./LayoutStyled";

type LayoutProps = {
  title?: string;
}

const BaseLayout: React.FunctionComponent<LayoutProps> = ({ children, title}) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title ? `${title} | Cafe Map`  : 'Cafe Map'}</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:type" content="" />
      <meta property="og:image" content="" />
      <link rel="shortcut icon" href="" />
      <link rel="apple-touch-icon" href="" />
    </Head>
    <LayoutStyled />
    <div className="container-fluid">
      {children}
    </div>
  </>
);

export default BaseLayout;
