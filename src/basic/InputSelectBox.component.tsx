import React from 'react';
import { useFormManager, FormInputData, IFormInitalState, IFormInputAvailableValue } from 'vdr-react-form-manager';
import { formClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInputData.Builder('myselectbox')
			.addAvailableValue({ value: '0', label: 'MAN' } as IFormInputAvailableValue)
			.addAvailableValue({ value: '1', label: 'WOMAN' } as IFormInputAvailableValue)
			.addAvailableValue({ value: '3', label: 'UNKNOW' } as IFormInputAvailableValue)
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function InputSelectBoxComponent() {
	const { handleFormChange, getInput } = useFormManager(formInitalState);
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
		</div>
	);
}
