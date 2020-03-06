import React from 'react';
import { NavLinkProps } from '../../types/NavLinkProps.type';
import { NavigationLinks } from '../../commons/NavigationLinks.component';

export function AdvancedNavigation() {
	const navLinks = [{ route: '/advanced/lastfiedupdated', name: 'LastFieldUpdated' }] as Array<NavLinkProps>;

	return <NavigationLinks navLinks={navLinks} />;
}
