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

const checkBoxName = 'contactlist';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(checkBoxName)
			.addAvailableValueList([
				{ value: 'mail', label: 'By mail' },
				{ value: 'phone', label: 'By phone' },
				{ value: 'post', label: 'By post' }
			])
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function MultipleInputCheckBox() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(checkBoxName);
	const { availableValues, value } = inputProps;

	function renderInput(x: IFormInputAvailableValue, inputValue: string) {
		return (
			<React.Fragment>
				<label>
					{x.label}
					<input
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
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>checkbox</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<p>Contact me by</p>
					{availableValues.map((x: IFormInputAvailableValue) => renderInput(x, value))}
				</form>
				<ShowCodeLink codeLink="basic/InputCheckBox.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
