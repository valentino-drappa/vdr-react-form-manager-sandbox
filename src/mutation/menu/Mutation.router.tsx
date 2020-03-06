import React from 'react';
import { BasicInputMutationComponent } from '../BasicInputMutation.component';
import { Navigation } from '../../commons/Navigation.component';
import { MenuInfos } from '../../commons/MenuInfos.components';

const navLinks = [{ path: '/mutation/input', navLabel: 'Update input', component: BasicInputMutationComponent }];

export function MutationRouter() {
	return (
		<React.Fragment>
			<MenuInfos menuTitle="Mutation" menuDescription="Examples showing how to interact with input properties" />
			<Navigation navLinks={navLinks} />
		</React.Fragment>
	);
}
