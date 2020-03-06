import React from 'react';
import { useFormManager, FormInput, IFormInitalState, IFormInputAvailableValue } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';
import { FormValuesRendererComponent } from '../commons/FormValuesRenderer.component';

const checkBoxName = 'contactlist';
const formInitalState = {
	formInputs: {
		...FormInput.Builder(checkBoxName)
			.addAvailableValueList([
				{ value: 'mail', label: 'By mail' },
				{ value: 'phone', label: 'By phone' },
				{ value: 'post', label: 'By post' }
			])
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function MultipleInputCheckBoxComponent() {
	const { handleFormChange, getInput, getFormValues } = useFormManager(formInitalState);
	const { availableValues, value } = getInput(checkBoxName);

	function renderInput(x: IFormInputAvailableValue, inputValue: string) {
		return (
			<React.Fragment>
				<label>
					{x.label}
					<input
						className={inputTextClasses}
						type="checkbox"
						name={checkBoxName}
						value={x.value}
						checked={inputValue.indexOf(x.value) !== -1}
					/>
				</label>
				<br />
			</React.Fragment>
		);
	}

	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>checkbox</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<p>Contact me by</p>
				{availableValues.map((x: IFormInputAvailableValue) => renderInput(x, value))}
			</form>
			<ShowCodeLink codeLink="basic/InputCheckBox.component.tsx" />
			<FormValuesRendererComponent formValues={getFormValues()} />
		</div>
	);
}
