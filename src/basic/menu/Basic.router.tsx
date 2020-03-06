import React from 'react';
import { InputTextComponent } from '../InputText.component';
import { InputCheckBoxComponent } from '../InputCheckBox.component';
import { InputSelectBoxComponent } from '../InputSelectBox.component';
import { InputRadioComponent } from '../InputRadio.component';
import { InputTextAeraComponent } from '../InputTextAera.component';
import { MultipleInputCheckBoxComponent } from '../MultipleInputCheckBox.component';
import { Navigation } from '../../commons/Navigation.component';
import { Redirect } from 'react-router-dom';
import { MenuInfos } from '../../commons/MenuInfos.components';

const navLinks = [
	{ navLabel: 'text', path: '/basic/text', component: InputTextComponent },
	{ navLabel: 'checkbox', path: '/basic/checkbox', component: InputCheckBoxComponent },
	{ navLabel: 'selectbox', path: '/basic/selectbox', component: InputSelectBoxComponent },
	{ navLabel: 'radio', path: '/basic/radio', component: InputRadioComponent },
	{ navLabel: 'textaera', path: '/basic/textaera', component: InputTextAeraComponent },
	{ navLabel: 'Multiple checkboxes', path: '/basic/multiplecheckbox', component: MultipleInputCheckBoxComponent }
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
