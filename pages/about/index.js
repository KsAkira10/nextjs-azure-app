import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About = ({ title = 'halug | about' }) => (
	<>
		<Head>
			<title>{title}</title>
		</Head>
		<Link href="/">
			<a>Home</a>
		</Link>
		<h1>About</h1>
	</>
);

About.getInitialProps = (ctx) => ({ ...ctx.query });

export default About;
