import React from 'react';
import { Route } from 'react-router-dom';
import { InputTextComponent } from '../InputText.component';
import { InputCheckBoxComponent } from '../InputCheckBox.component';
import { InputSelectBoxComponent } from '../InputSelectBox.component';
import { InputRadioComponent } from '../InputRadio.component';
import { InputTextAeraComponent } from '../InputTextAera.component';
import { BasicNavigation } from './Basic.navigation';
import { BasicInfos } from './BasicInfos.component';

export function BasicRouter() {
	return (
		<React.Fragment>
			<BasicInfos />
			<div className="flex flex-row items-start">
				<BasicNavigation />
				<Route exact path="/basic/text" component={InputTextComponent} />
				<Route exact path="/basic/checkbox" component={InputCheckBoxComponent} />
				<Route exact path="/basic/selectbox" component={InputSelectBoxComponent} />
				<Route exact path="/basic/radio" component={InputRadioComponent} />
				<Route exact path="/basic/textaera" component={InputTextAeraComponent} />
			</div>
		</React.Fragment>
	);
}
