import React from 'react';
import { Navigation } from '../../commons/Navigation.component';
import { MenuInfos } from '../../commons/MenuInfos.components';
import { RenderOnlyOnChangeContainer } from '../renderOnlyOnChange/AdvancedRenderOptimization.container';
// { path: '/advanced/rendertest', navLabel: 'RenderTest', component: AdvancedTestContainer }
const navLinks = [
	{ path: '/advanced/rendertest', navLabel: 'Rendering optimization', component: RenderOnlyOnChangeContainer }
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
