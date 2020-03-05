import React from 'react';
import { NavLinkProps } from '../../types/NavLinkProps.type';
import { NavigationLinks } from '../../commons/NavigationLinks.component';

export function ValidatorNavigation() {
	const navLinks = [
		{ route: '/validator/input', name: 'Single input validator' },
		{ route: '/validator/input-multiples', name: 'Multiple input validator' },
		{ route: '/validator/form', name: 'Form Validator' },
		{ route: '/validator/mix', name: 'Mix input and form validators' }
	] as Array<NavLinkProps>;

	return <NavigationLinks navLinks={navLinks} />;
}
