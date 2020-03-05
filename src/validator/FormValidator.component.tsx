import React from 'react';
import {
	useFormManager,
	FormInputData,
	IFormInitalState,
	IFormStateInputs,
	IFormValidator
} from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

/* cross fields validation */
class MyFormValidator implements IFormValidator {
	validateForm(formInputs: IFormStateInputs): string | null {
		const myInputOne: FormInputData = formInputs['inputOne'];
		const myInputTwo: FormInputData = formInputs['inputTwo'];
		if (myInputOne.value !== myInputTwo.value) {
			return 'Inputs must have the same value';
		}
		return null;
	}
}

const formInitalState = {
	formInputs: {
		...FormInputData.Builder('inputOne').addValue('test').build(),
		...FormInputData.Builder('inputTwo').build()
	},
	formValidators: [new MyFormValidator()]
} as IFormInitalState;

export function FormValidatorComponent() {
	const { handleFormChange, getInput, formErrors, isFormValid } = useFormManager(formInitalState);

	function renderFormErrors() {
		if (!formErrors.length) {
			return null;
		}
		return <div className="bg-orange-300 p-1 my-2"> {formErrors.map((x: string) => <div key={x}>{x}</div>)}</div>;
	}

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
			{renderFormErrors()}
			<hr />
			<div>Is my form valid ? {isFormValid + ''}</div>
			<ShowCodeLink codeLink="validator/FormValidator.component.tsx" />
		</div>
	);
}
