import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const sheet = new ServerStyleSheet();
		const page = this.renderDocument(
			(App) => (props) => sheet.collectStyles(<App {...props} />),
			{
				...ctx
			},
		);
		const styleTags = sheet.getStyleElement();
		return { ...initialProps, ...page, styleTags };
	}

	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
					/>
					<meta
						name="description"
						content="Melhor plataforma para aluguel e agendamentos de quadras para prática de esportes."
					/>
					<meta name="keywords" content="halug, aluguel, quadra, futebol, volei, basquete" />
					<meta name="theme-color" content="#1D5572" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-title" content="Halug" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="1D5572" />
					<meta name="msapplication-navbutton-color" content="#1D5572" />
					<meta name="msapplication-TileColor" content="white" />
					<meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="application-name" content="Halug" />
					<meta
						name="msapplication-tooltip"
						content="Melhor plataforma para aluguel e agendamentos de quadras para prática de esportes."
					/>
					<meta name="msapplication-starturl" content="/" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="full-screen" content="yes" />
					<meta name="browsermode" content="application" />
					<meta name="nightmode" content="disable" />
					<meta name="layoutmode" content="fitscreen" />
					<meta name="imagemode" content="force" />
					<meta name="screen-orientation" content="portrait" />
					<link rel="apple-touch-icon" sizes="57x57" href="images/icons/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="images/icons/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="images/icons/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="images/icons/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="images/icons/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-icon-180x180.png" />
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="images/icons/android-icon-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="512x512"
						href="images/icons/favicon-512x512.png"
					/>
					<link rel="icon" type="image/png" sizes="96x96" href="images/icons/favicon-96x96.png" />
					<link
						rel="icon"
						type="image/png"
						sizes="48x48"
						href="images/icons/android-icon-48x48.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="36x36"
						href="images/icons/android-icon-36x36.png"
					/>
					<link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
					<link href="touch-icon-start-up-320x480.png" rel="apple-touch-startup-image" />
					<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
					<link href="/manifest.json" rel="manifest" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
