import Document, {Head, Main, NextScript} from 'next/document';

export default class Root extends Document {
	render() {
		return (
			<html>
				<Head>
					{/* Base */}
					<base href="/static/" />

					{/* Responsive */}
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>

					{/* Web App */}
					{/* <meta name="application-name" content={title} />
					<meta name="screen-orientation" content="portrait" />
					<meta name="theme-color" content="#1c1c1c" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-title" content={title} />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/> */}

					{/* Favicon */}
					<link
						rel="icon"
						href="img/favicon/favicon-32.png"
						sizes="32x32"
						type="image/png"
					/>
					<link
						rel="icon"
						href="img/favicon/favicon-64.png"
						sizes="64x64"
						type="image/png"
					/>
					<link
						rel="icon"
						href="img/favicon/favicon-192.png"
						sizes="192x192"
						type="image/png"
					/>
					<link
						rel="apple-touch-icon"
						href="img/favicon/favicon-64.png"
						sizes="64x64"
					/>
					<link
						rel="apple-touch-icon"
						href="img/favicon/favicon-192.png"
						sizes="192x192"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
