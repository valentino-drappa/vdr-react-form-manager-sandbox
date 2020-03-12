import React from 'react';

import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormInputProperties, IFormInitalState, useFormManager } from 'vdr-react-form-manager';

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('inputOne').addValue('test').build(),
		...FormInputProperties.Builder('inputTwo').build()
	}
} as IFormInitalState;

export function AdvancedLastFiedUpdatedComponent() {
	const { handleFormChange, getInputProps, lastFieldUpdated } = useFormManager(formInitalState);

	function renderInput(inputName: string) {
		const { name, value } = getInputProps(inputName);
		return <input className={inputTextClasses} type="text" name={name} value={value} />;
	}

	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>Form validator</h2>
			<form onChange={handleFormChange} className={formClasses}>
				{renderInput('inputOne')}
				<br />
				{renderInput('inputTwo')}
			</form>
			<hr />
			<ShowCodeLink codeLink="validator/FormValidator.component.tsx" />
			<div>lastfieldupdate : {lastFieldUpdated ? lastFieldUpdated.inputName : null}</div>
		</div>
	);
}
