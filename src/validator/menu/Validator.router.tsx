import React from 'react';
import { SingleTextValidator } from '../SingleInputTextValidator.component';
import { MultipleInputTextValidators } from '../MultipleInputTextValidators.component';
import { FormValidator } from '../FormValidator.component';
import { MixFormAndInputValidators } from '../MixFormAndInputValidators.component';
import { Navigation } from '../../commons/component/Navigation.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';

const navLinks = [
	{ path: '/validator/input', navLabel: 'Single validator', component: SingleTextValidator },
	{
		path: '/validator/input-multiples',
		navLabel: 'Multiple validators',
		component: MultipleInputTextValidators
	},
	{ path: '/validator/form', navLabel: 'Form Validator', component: FormValidator },
	{ path: '/validator/mix', navLabel: 'Mix input and form validators', component: MixFormAndInputValidators }
];

export function ValidatorRouter() {
	return (
		<React.Fragment>
			<MenuInfos
				menuTitle="Validators"
				menuDescription="Examples showing how validate your inputs and your form (cross inputs validation)."
			/>
			<Navigation navLinks={navLinks} />
		</React.Fragment>
	);
}
