import React from 'react';
import { NavLinkProps } from '../../types/NavLinkProps.type';
import { NavigationLinks } from '../../commons/NavigationLinks.component';

export function FormNavigation() {
	const navLinks = [
		{ route: '/form/getformvalues', name: 'Get form values' },
		{ route: '/form/formdisable', name: 'Enable/Disable form' },
		{ route: '/form/formreset', name: 'Reset form' }
	] as Array<NavLinkProps>;

	return <NavigationLinks navLinks={navLinks} />;
}
