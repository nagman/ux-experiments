import PropTypes from 'prop-types';

const Img = ({src, width, sizes, ...rest}) => {
	const srcSets = [
		`${src} ${width}w`,
		`${src.replace('.', '@2x.')} ${width * 2}w`,
		`${src.replace('.', '@3x.')} ${width * 3}w`,
	];

	return (
		<img
			src={src}
			srcSet={srcSets.join(', ')}
			sizes={sizes || width + 'px'}
			{...rest}
		/>
	);
};

Img.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	sizes: PropTypes.string,
};

export default Img;
