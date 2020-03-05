import React from 'react';
import { NavLinkProps } from '../../types/NavLinkProps.type';
import { NavigationLinks } from '../../commons/NavigationLinks.component';

export function MutationNavigation() {
	const navLinks = [
		{ route: '/mutation/input', name: 'Change input properties' },
		{ route: '/mutation/reset-form', name: 'Reset form' }
	] as Array<NavLinkProps>;

	return <NavigationLinks navLinks={navLinks} />;
}
