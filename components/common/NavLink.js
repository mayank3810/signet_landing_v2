import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const NavLink = ({ route, title }) => {
	const { pathname } = useRouter();
	return (
		<li className={`nav-item ${pathname === route && 'active'}`}>
			<Link className="nav-link" href={route}>
				{title}
			</Link>
		</li>
	);
};
