import React from 'react';
import { Route } from 'react-router-dom';
import { ValidatorNavigation } from './Validator.navigation';
import { SingleTextValidatorComponent } from './SingleInputTextValidator.component';
import { MultipleInputTextValidatorComponent } from './MultipleInputTextValidator.component copy';
import { FormValidatorComponent } from './FormValidator.component';
import { MixFormAndInputValidatorComponent } from './MixFormAndInputValidator.component';

export function ValidatorRouter() {
	return (
		<React.Fragment>
			<h2 className="text-xl underline py-3">Validators</h2>
			<div className="flex flex-row items-start">
				<ValidatorNavigation />
				<Route exact path="/validator/input" component={SingleTextValidatorComponent} />
				<Route exact path="/validator/input-multiples" component={MultipleInputTextValidatorComponent} />
				<Route exact path="/validator/form" component={FormValidatorComponent} />
				<Route exact path="/validator/mix" component={MixFormAndInputValidatorComponent} />
			</div>
		</React.Fragment>
	);
}
