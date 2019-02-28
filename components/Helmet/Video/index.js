import style from './style.scss';
import {useState, useEffect, useRef} from 'react';
import c from '../../../utils/classname';

const Video = props => {
	const [playing, setPlaying] = useState(false);

	const videoRef = useRef();

	useEffect(_ => {
		videoRef.current.onplay = _ => setPlaying(true);
		return _ => (videoRef.current.onplay = null);
	}, []);

	return (
		<div className={style.video}>
			<div className={style.videoWrapper}>
				<video
					src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
					controls
					ref={videoRef}
				/>
			</div>

			<div
				className={c([style.placeholder, playing && style.playing])}
				onClick={_ => videoRef.current.play()}
			>
				<img src="" alt="Qwart Helmet" />
			</div>

			<button className={c([style.playBtn, playing && style.playing])} />
		</div>
	);
};

export default Video;
