import React from 'react';
import { SingleTextValidatorComponent } from '../SingleInputTextValidator.component';
import { SeveralInputTextValidatorsComponent } from '../SeveralInputTextValidators.component';
import { FormValidatorComponent } from '../FormValidator.component';
import { MixFormAndInputValidatorComponent } from '../MixFormAndInputValidator.component';
import { Navigation } from '../../commons/Navigation.component';
import { MenuInfos } from '../../commons/MenuInfos.components';

const navLinks = [
	{ path: '/validator/input', navLabel: 'Single input validator', component: SingleTextValidatorComponent },
	{
		path: '/validator/input-multiples',
		navLabel: 'Several validators for an input',
		component: SeveralInputTextValidatorsComponent
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
