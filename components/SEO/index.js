import PropTypes from 'prop-types';
import NextSeo from 'next-seo';

const SEO = ({title, description, page}) => {
	title = `${title} - ${process.env.title}`;
	const url = process.env.url + page;

	const seoConfig = {
		title,
		description,
		canonical: url,

		twitter: {
			cardType: 'summary_large_image',
			handle: '@Qu3ntinD',
			site: '@Qu3ntinD',
		},

		openGraph: {
			site_name: process.env.title,
			title,
			description,
			url,
			type: 'website',
			locale: 'en_US',
			images: [
				{
					url:
						process.env.url + '/static/screenshots' + page + '.jpg',
					width: 800,
					height: 600,
					alt: title,
				},
			],
		},
	};

	return <NextSeo config={seoConfig} />;
};

SEO.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	page: PropTypes.string.isRequired,
};

export default SEO;
