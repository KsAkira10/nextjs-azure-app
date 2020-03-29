import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Title = styled.h1`
	color: red;
`;

const Index = ({ stars = '0', title = 'halug' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Title>Home - {stars}</Title>
  </>
);

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count, ...ctx.query };
};

export default Index;
