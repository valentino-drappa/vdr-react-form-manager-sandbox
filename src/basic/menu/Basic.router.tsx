import React from 'react';
import { InputText } from '../InputText.component';
import { InputCheckBox } from '../InputCheckBox.component';
import { InputSelectBox } from '../InputSelectBox.component';
import { InputRadio } from '../InputRadio.component';
import { InputTextAera } from '../InputTextAera.component';
import { MultipleInputCheckBox } from '../MultipleInputCheckBox.component';
import { Navigation } from '../../commons/component/Navigation.component';
import { Redirect } from 'react-router-dom';
import { MenuInfos } from '../../commons/component/MenuInfos.components';

const navLinks = [
	{ navLabel: 'text', path: '/basic/text', component: InputText },
	{ navLabel: 'checkbox', path: '/basic/checkbox', component: InputCheckBox },
	{ navLabel: 'selectbox', path: '/basic/selectbox', component: InputSelectBox },
	{ navLabel: 'radio', path: '/basic/radio', component: InputRadio },
	{ navLabel: 'textaera', path: '/basic/textaera', component: InputTextAera },
	{ navLabel: 'Multiple checkboxes', path: '/basic/multiplecheckbox', component: MultipleInputCheckBox }
];

export function BasicRouter() {
	return (
		<React.Fragment>
			<MenuInfos menuTitle="Basics" menuDescription="Simple examples showing how to use the library" />
			<Navigation navLinks={navLinks} />
			<Redirect path="basic" to="/basic/text" />
		</React.Fragment>
	);
}
