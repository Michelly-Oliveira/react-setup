import React from 'react';
import Head from 'next/head';

// Import as react component because we are using a library(inline-react-svg) so the image does not convert into base64
import Logo from '../assets/rocketseat.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
	return (
		<Container>
			<Head>
				<title>Homepage</title>
			</Head>

			<Logo />

			<h1>ReactJS Structure</h1>
			<p>A ReactJS + Next.js structure made by Rocketseat</p>
		</Container>
	);
};

export default Home;
