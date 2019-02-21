import 'destyle.css';
import '../theme/style.scss';
import App, {Container} from 'next/app';
import Head from 'next/head';
import Menu from '../components/Menu';
import SEO from '../components/SEO';

export default class MyApp extends App {
	render() {
		const {Component, pageProps, router} = this.props;
		return (
			<Container>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=yes"
					/>
				</Head>
				<SEO {...pageProps} page={router.pathname} />
				<Menu />
				<Component {...pageProps} />
			</Container>
		);
	}
}
