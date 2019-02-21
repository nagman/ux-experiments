import 'destyle.css';
import '../theme/style.scss';
import App, {Container} from 'next/app';
import Head from 'next/head';
import NextSeo from 'next-seo';
import Menu from '../components/Menu';

// https://github.com/garmeeh/next-seo#title-template

const SEO = {
	titleTemplate: `%s - ${process.env.title}`,
	twitter: {
		cardType: 'summary_large_image',
		handle: '@Qu3ntinD',
		// site: '@site',
	},

	openGraph: {
		// url: '',
		type: 'website',
		locale: 'fr_FR',
		// book: {
		// 	authors: '(string[]) Writers of the article.',
		// 	isbn: '(string) The ISBN',
		// 	releaseDate: '(datetime) The date the book was released.',
		// 	tags: '(string[]) Tag words associated with this book.',
		// },
		// article: {
		// 	publishedTime: '(datetime) When the article was first published.',
		// 	modifiedTime: '(datetime) When the article was last changed.',
		// 	expirationTime: '(datetime) When the article is out of date after.',
		// 	authors: '(string[]) Writers of the article.',
		// 	section: '(string) A high-level section name. E.g. Technology',
		// 	tags: '(string[]) Tag words associated with this article.',
		// },
	},
};

export default class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;
		const {title, description} = pageProps;
		const seoConfig = {
			...SEO,
			title,
			description,
			openGraph: {
				title,
				description,
				// images: [
				// 	{
				// 		url: 'https://www.example.ie/og-image.jpg',
				// 		width: 800,
				// 		height: 600,
				// 		alt: 'Og Image Alt',
				// 	},
				// 	{
				// 		url: 'https://www.example.ie/og-image-2.jpg',
				// 		width: 800,
				// 		height: 600,
				// 		alt: 'Og Image Alt 2',
				// 	},
				// ],
			},
		};

		return (
			<Container>
				<Head>
					<base href="/static/" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=yes"
					/>
				</Head>
				<NextSeo config={seoConfig} />
				<Menu />
				<Component {...pageProps} />
			</Container>
		);
	}
}
