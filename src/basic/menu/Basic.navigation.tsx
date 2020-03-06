import React from 'react';
import { NavLinkProps } from '../../types/NavLinkProps.type';
import { NavigationLinks } from '../../commons/NavigationLinks.component';

export function BasicNavigation() {
	const navLinks = [
		{ route: '/basic/text', name: 'text' },
		{ route: '/basic/checkbox', name: 'checkbox' },
		{ route: '/basic/selectbox', name: 'selectbox' },
		{ route: '/basic/radio', name: 'radio' },
		{ route: '/basic/textaera', name: 'textaera' },
		{ route: '/basic/multiplecheckbox', name: 'Multiple checkboxes' }
	] as Array<NavLinkProps>;

	return <NavigationLinks navLinks={navLinks} />;
}
