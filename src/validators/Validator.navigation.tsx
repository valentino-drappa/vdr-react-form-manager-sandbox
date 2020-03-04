import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from '../types/NanLinkProps.type';

const linkclassNames = 'py-1 px-2 m-1';
const linkActiveClassName = 'bg-gray-300';

export function ValidatorNavigation() {
	const routes = [
		{ route: '/validator/input', name: 'Single input validator' },
		{ route: '/validator/input-multiples', name: 'Multiple input validator' },
		{ route: '/validator/form', name: 'Form Validator' },
		{ route: '/validator/mix', name: 'Mix input and form validators' }
	] as Array<NavLinkProps>;

	function getNavLink({ route, name }: NavLinkProps) {
		return (
			<NavLink key={route} to={route} className={linkclassNames} activeClassName={linkActiveClassName}>
				{name}
			</NavLink>
		);
	}

	return <div className="flex flex-col">{routes.map((x, index) => getNavLink(x))}</div>;
}
