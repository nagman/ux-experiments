const fonts = ['graphik-700', 'graphik-600', 'graphik-400'];

const FontsPreload = _ =>
	fonts.map((font, i) => (
		<link
			key={i}
			rel="preload"
			href={`static/fonts/${font}.woff2`}
			as="font"
			type="font/woff2"
			crossOrigin="true"
		/>
	));

export default FontsPreload;
