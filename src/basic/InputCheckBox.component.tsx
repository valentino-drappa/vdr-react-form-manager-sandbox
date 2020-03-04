import React from 'react';
import { useFormManager, FormInputData, EFormInputType, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';

const formInitalState = {
	formInputs: {
		...FormInputData.Builder(EFormInputType.INPUT_TYPE_CHECKBOX, 'checkbox').build()
	},
	formValidators: []
} as IFormInitalState;

export function InputCheckBoxComponent() {
	const { handleFormChange, getInput } = useFormManager(formInitalState);
	const { name, value, type } = getInput('checkbox');
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>checkbox</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<label>My checkbox&nbsp;
						<input className={inputTextClasses} type={type.toString()} name={name} value={value} />
				</label>
			</form>
		</div>
	);
}
