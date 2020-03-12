import React from 'react';
import { NavLinkProps } from '../types/NavLinkProps.type';
import { NavLink, Route } from 'react-router-dom';
import { linkClasses, linkActiveClasses } from '../constant/App.constant';
import { BasicRouter } from '../basic/menu/Basic.router';
import { FormRouter } from '../form/menu/Form.router';
import { ValidatorRouter } from '../validator/menu/Validator.router';
import { MutationRouter } from '../mutation/menu/Mutation.router';
import { AdvancedRouter } from '../advanced/menu/Advanced.router';

export function AppMenu() {
	const routes = [
		{ path: '/basic', navLabel: 'Basics', component: BasicRouter },
		{ path: '/validator', navLabel: 'Validators', component: ValidatorRouter },
		{ path: '/form', navLabel: 'Form', component: FormRouter },
		{ path: '/mutation', navLabel: 'Mutations', component: MutationRouter },
		{ path: '/advanced', navLabel: 'Advanced', component: AdvancedRouter }
	];

	function getNavLink({ path: route, navLabel: name }: NavLinkProps) {
		return (
			<NavLink key={route} to={route} className={linkClasses} activeClassName={linkActiveClasses}>
				{name}
			</NavLink>
		);
	}

	return (
		<React.Fragment>
			<div className="flex flex-row flex-wrap py-2">{routes.map((x) => getNavLink(x))}</div>
			<hr />
			{routes.map((x) => <Route key={x.path} path={x.path} component={x.component} />)}
		</React.Fragment>
	);
}
