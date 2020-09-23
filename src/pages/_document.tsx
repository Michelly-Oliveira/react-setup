import React from 'react';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Configurations for all the pages in the app
export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	// Format of all the pages in the app, any links, scripts, meta, etc, defined here will be used in all the pages
	/*
		<html>
			<head>
				// All attributes from the head, like links, metas, titles
			</head>
			<body>
				// Contains all elements of the page
				<Main />
				// Scripts at the end of the page
				<NextScript />
			</body>
		</html>
	*/
	render(): JSX.Element {
		return (
			<Html lang="pt">
				<Head>
					<meta charSet="utf-8" />

					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
					/>

					<link
						rel="icon"
						href="https://rocketseat.com.br/favicon.ico"
						type="image/x-icon"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
