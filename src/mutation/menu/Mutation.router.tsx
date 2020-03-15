import React from 'react';
import { InputManagement } from '../InputManagement.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';

export function MutationRouter() {
	return (
		<React.Fragment>
			<MenuInfos
				menuTitle="Manage input"
				menuDescription="Examples showing how to interact with input properties"
			/>
			<InputManagement />
		</React.Fragment>
	);
}
