import React from 'react';
import { NavLinkProps } from '../types/NavLinkProps.type';
import { NavLink } from 'react-router-dom';
import { linkclassNames, linkActiveClassName } from '../constant/App.constant';

export function AppMenu() {
	const routes = [
		{ route: '/basic', name: 'Basics' },
		{ route: '/validator', name: 'Validators' },
		{ route: '/mutation', name: 'Mutations' },
		{ route: '/advanced', name: 'Advanced' }
	] as Array<NavLinkProps>;

	function getNavLink({ route, name }: NavLinkProps) {
		return (
			<NavLink key={route} to={route} className={linkclassNames} activeClassName={linkActiveClassName}>
				{name}
			</NavLink>
		);
	}

	return (
		<React.Fragment>
			<div className="flex flex-row pb-2">{routes.map((x, index) => getNavLink(x))}</div>
			<hr />
		</React.Fragment>
	);
}
