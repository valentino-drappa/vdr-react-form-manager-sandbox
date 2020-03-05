import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from '../types/NavLinkProps.type';
import { linkclassNames, linkActiveClassName } from '../constant/App.constant';

type Props = {
	navLinks: NavLinkProps[];
};

export function NavigationLinks({ navLinks }: Props) {
	function getNavLink({ route, name }: NavLinkProps) {
		return (
			<NavLink key={route} to={route} className={linkclassNames} activeClassName={linkActiveClassName}>
				{name}
			</NavLink>
		);
	}
	return <div className="flex flex-col border p-2">{navLinks.map((x, index) => getNavLink(x))}</div>;
}
