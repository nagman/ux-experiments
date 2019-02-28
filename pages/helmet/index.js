import style from './style.scss';
import Header from '../../components/Helmet/Header';
import Video from '../../components/Helmet/Video';

const Helmet = props => (
	<main className={style.helmet}>
		<Header />
		<Video />
	</main>
);

Helmet.getInitialProps = _ => ({
	title: 'Helmet',
	description:
		'Typography distorsion behind helmet visor. Uses Pixi.js, Next.js and a lot of cool CSS.',
});

export default Helmet;
