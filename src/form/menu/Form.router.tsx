import React from 'react';
import { FormManagement } from '../FormManagement.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';

export function FormRouter() {
	return (
		<React.Fragment>
			<MenuInfos
				menuTitle="Form"
				menuDescription="Examples showing how to interact with form properties and form inputs"
			/>
			<FormManagement />
		</React.Fragment>
	);
}
