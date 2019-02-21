import style from './style.scss';
import Link from 'next/link';

import PierreLogo from '../../../static/icons/pierre-logo.svg';
import Search from '../../../static/icons/search.svg';
import ShoppingBag from '../../../static/icons/shopping-bag.svg';

const menu = ['Products', 'Newsroom', 'QwartLab', 'Custom shop'];

const Header = _ => (
	<header className={style.header}>
		{/* Logo */}
		<Link href="/" prefetch>
			<a className={style.logo}>
				<PierreLogo />
			</a>
		</Link>

		{/* Menu */}
		{menu.map((link, i) => (
			<a
				key={i}
				className={style.pageLink}
				href="#"
				title="won't go anywhere"
			>
				{link}
			</a>
		))}

		{/* Icons */}
		<Search className={style.searchBtn} />
		<ShoppingBag className={style.shoppingBag} />
	</header>
);

export default Header;
