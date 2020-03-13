import React from 'react';
import { Navigation } from '../../commons/component/Navigation.component';
import { MenuInfos } from '../../commons/component/MenuInfos.components';
import { RenderOnlyOnChange } from '../renderOnlyOnChange/RenderOnlyOnChange.component';
// { path: '/advanced/rendertest', navLabel: 'RenderTest', component: AdvancedTestContainer }
const navLinks = [{ path: '/advanced/rendertest', navLabel: 'Rendering optimization', component: RenderOnlyOnChange }];

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
