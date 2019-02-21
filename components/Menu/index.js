import style from './style.scss';
import Link from 'next/link';
import {withRouter} from 'next/router';

const pages = ['helmet'];

const Menu = ({router}) => (
	<nav className={style.menu}>
		<p>Other demos :</p>
		<ul>
			{pages.map((page, i) => (
				<li key={i}>
					<Link href={page} prefetch>
						<a
							className={
								router.pathname === '/' + page
									? style.active
									: null
							}
						>
							{i + 1}
						</a>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default withRouter(Menu);
