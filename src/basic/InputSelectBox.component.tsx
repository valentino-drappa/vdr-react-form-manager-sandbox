import React from 'react';
import { useFormManager, FormInput, IFormInitalState, IFormInputAvailableValue } from 'vdr-react-form-manager';
import { formClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';
import { FormValuesRendererComponent } from '../commons/FormValuesRenderer.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('myselectbox')
			.addAvailableValue({ value: '', label: 'Pick one' })
			.addAvailableValue({ value: '0', label: 'MAN' })
			.addAvailableValue({ value: '1', label: 'WOMAN' })
			.addAvailableValue({ value: '3', label: 'SUPERMAN' })
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function InputSelectBoxComponent() {
	const { handleFormChange, getInput, getFormValues } = useFormManager(formInitalState);
	const { name, value, availableValues } = getInput('myselectbox');

	function renderOption({ value, label }: IFormInputAvailableValue) {
		return (
			<option key={value} value={value}>
				{label}
			</option>
		);
	}

	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>selectbox</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<label>
					My selectbox&nbsp;
					<select name={name} value={value}>
						{availableValues.map((x) => renderOption(x))}
					</select>
				</label>
			</form>
			<ShowCodeLink codeLink="basic/InputSelectBox.component.tsx" />
			<FormValuesRendererComponent formValues={getFormValues()} />
		</div>
	);
}
