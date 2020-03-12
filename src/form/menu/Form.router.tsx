import React from 'react';
import { FormGetValuesComponent } from '../FormGetValues.component';
import { FormDisableComponent } from '../FormDisable.component';
import { FormResetComponent } from '../FormReset.component';
import { Navigation } from '../../commons/component/Navigation.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';
import { FormAddRemoveInputComponent } from '../FormAddRemoveInput.component';

const navLinks = [
	{ path: '/form/getformvalues', navLabel: 'Get form values', component: FormGetValuesComponent },
	{ path: '/form/formdisable', navLabel: 'Enable/Disable form', component: FormDisableComponent },
	{ path: '/form/formreset', navLabel: 'Reset form', component: FormResetComponent },
	{ path: '/form/formraddremoveinput', navLabel: 'Add/Remove input', component: FormAddRemoveInputComponent }
];

export function FormRouter() {
	return (
		<React.Fragment>
			<MenuInfos
				menuTitle="Form"
				menuDescription="Examples showing how to interact with form properties and form inputs"
			/>
			<Navigation navLinks={navLinks} />
		</React.Fragment>
	);
}
