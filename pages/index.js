const Home = props => (
	<main>
		<h1>This is the Home</h1>
	</main>
);

Home.getInitialProps = _ => ({
	title: 'Home',
	description:
		'A set of UX experiments - designed by Pierre Patrault and developed by Quentin Durand',
});

export default Home;
