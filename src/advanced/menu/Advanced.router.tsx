import React from 'react';
import { Navigation } from '../../commons/Navigation.component';
import { AdvancedLastFiedUpdatedComponent } from '../AdvancedLastFiedUpdated.component';
import { MenuInfos } from '../../commons/MenuInfos.components';

const navLinks = [
	{ path: '/advanced/lastfiedupdated', navLabel: 'LastFieldUpdated', component: AdvancedLastFiedUpdatedComponent }
];

export function AdvancedRouter() {
	return (
		<React.Fragment>
			<MenuInfos
				menuTitle="Advanced"
				menuDescription="Advanced examples showing how you can use the library for your projects"
			/>
			<Navigation navLinks={navLinks} />
		</React.Fragment>
	);
}
