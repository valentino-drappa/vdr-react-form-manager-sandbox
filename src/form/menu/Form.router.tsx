import React from 'react';
import { FormDisableComponent } from '../FormDisable.component';
import { Navigation } from '../../commons/component/Navigation.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';

const navLinks = [{ path: '/form/formdisable', navLabel: 'Enable/Disable form', component: FormDisableComponent }];

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
