import React from 'react';
import { NavLinkProps } from '../../types/NavLinkProps.type';
import { NavigationLinks } from '../../commons/NavigationLinks.component';

export function MutationNavigation() {
	const navLinks = [{ route: '/mutation/input', name: 'Change input properties' }] as Array<NavLinkProps>;

	return <NavigationLinks navLinks={navLinks} />;
}
