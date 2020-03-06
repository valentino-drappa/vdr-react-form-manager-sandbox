import React from 'react';
import { Route } from 'react-router-dom';
import { FormNavigation } from './Form.navigation';
import { FormInfos } from './FormInfos.component';
import { FormGetValuesComponent } from '../FormGetValues.component';
import { FormDisableComponent } from '../FormDisable.component';
import { FormResetComponent } from '../FormReset.component';

export function FormRouter() {
	return (
		<React.Fragment>
			<FormInfos />
			<div className="flex flex-row items-start">
				<FormNavigation />
				<Route exact path="/form/getformvalues" component={FormGetValuesComponent} />
				<Route exact path="/form/formdisable" component={FormDisableComponent} />
				<Route exact path="/form/formreset" component={FormResetComponent} />
			</div>
		</React.Fragment>
	);
}
