import React, { useEffect } from 'react';
import { useFormManager, FormInput, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('inputOne').addValue('test').build(),
		...FormInput.Builder('inputTwo').build()
	}
} as IFormInitalState;

export function AdvancedLastFiedUpdatedComponent() {
	const { handleFormChange, getInput, lastFieldUpdated, emitLastFieldUpdated } = useFormManager(formInitalState);

	useEffect(
		() => {
			if (lastFieldUpdated && lastFieldUpdated.inputName === 'inputTwo') {
				emitLastFieldUpdated(false);
			}
		},
		[lastFieldUpdated]
	);

	function renderInput(inputName: string) {
		const { name, value } = getInput(inputName);
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
