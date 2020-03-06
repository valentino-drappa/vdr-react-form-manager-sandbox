import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { NavLinkProps } from '../types/NavLinkProps.type';

type Props = {
	navLinks: NavLinkProps[];
};

const linkclassNames = 'py-1 px-2 m-1 hover:bg-gray-500 underline';
const linkActiveClassName = 'bg-gray-400';

export function Navigation({ navLinks }: Props) {
	function renderNavigationLinks() {
		return navLinks.map((x) => {
			return (
				<NavLink key={x.path} to={x.path} className={linkclassNames} activeClassName={linkActiveClassName}>
					{x.navLabel}
				</NavLink>
			);
		});
	}
	return (
		<React.Fragment>
			<div className="flex flex-row flex-wrap pl-1 py-1 bg-gray-300 border border-gray-400">
				{renderNavigationLinks()}
			</div>
			<div className="flex flex-col md:flex-row">
				{navLinks.map((x) => <Route exact key={x.path} path={x.path} component={x.component} />)}
			</div>
		</React.Fragment>
	);
}
