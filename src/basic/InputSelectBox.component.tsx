import React from 'react';
import {
	useFormManager,
	FormInputProperties,
	IFormInitalState,
	IFormInputAvailableValue
} from 'vdr-react-form-manager';
import { formClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';
const inputName = 'gender';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName)
			.addAvailableValue({ value: '', label: 'Pick one' })
			.addAvailableValue({ value: '0', label: 'MAN' })
			.addAvailableValue({ value: '1', label: 'WOMAN' })
			.addAvailableValue({ value: '3', label: 'SUPERMAN' })
			.addAvailableValue({ value: '4', label: 'SUPERWOMAN' })
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function InputSelectBox() {
	console.log('InputSelectBoxComponent');
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { name, value, availableValues } = inputProps;

	function renderOption({ value, label }: IFormInputAvailableValue) {
		return (
			<option key={value} value={value}>
				{label}
			</option>
		);
	}

	return (
		<React.Fragment>
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
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
