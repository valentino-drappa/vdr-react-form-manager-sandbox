import React from 'react';
import { SingleTextValidator } from '../SingleInputTextValidator.component';
import { MultipleInputTextValidators } from '../MultipleInputTextValidators.component';
import { FormValidatorComponent } from '../FormValidator.component';
import { MixFormAndInputValidatorComponent } from '../MixFormAndInputValidator.component';
import { Navigation } from '../../commons/component/Navigation.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';

const navLinks = [
	{ path: '/validator/input', navLabel: 'Single validator', component: SingleTextValidator },
	{
		path: '/validator/input-multiples',
		navLabel: 'Multiple validators',
		component: MultipleInputTextValidators
	},
	{ path: '/validator/form', navLabel: 'Form Validator', component: FormValidatorComponent },
	{ path: '/validator/mix', navLabel: 'Mix input and form validators', component: MixFormAndInputValidatorComponent }
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
