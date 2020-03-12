import React from 'react';
import {
	useFormManager,
	FormInputProperties,
	IFormInitalState,
	IStateInputs,
	IFormValidator,
	IFormInputValidator
} from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';

/* input validator */
class RequiredValidator implements IFormInputValidator {
	validate(value: any): string | null {
		if (value.trim() === '') {
			return 'Field is required';
		}
		return null; //no error
	}
}
const myRequiredValidator = new RequiredValidator();

/* cross field validation */
class MyFormValidator implements IFormValidator {
	validateForm(formInputs: IStateInputs): string | null {
		const myInputOne: FormInputProperties = formInputs['inputOne'];
		const myInputTwo: FormInputProperties = formInputs['inputTwo'];
		if (myInputOne.value !== myInputTwo.value) {
			return 'Inputs must have the same value';
		}
		return null;
	}
}

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('inputOne').addValue('test').addValidators([myRequiredValidator]).build(),
		...FormInputProperties.Builder('inputTwo').addValidators([myRequiredValidator]).build()
	},
	formValidators: [new MyFormValidator()]
} as IFormInitalState;

export function MixFormAndInputValidatorComponent() {
	const { handleFormChange, getInputProps, formErrors, isFormValid } = useFormManager(formInitalState);

	/*============= Render form errors ===================*/
	function renderFormErrors() {
		if (!formErrors.length) {
			return null;
		}
		return <div className="text-red-700 p-1 my-2"> {formErrors.map((x: string) => <div key={x}>{x}</div>)}</div>;
	}

	/*============= input rendering ===================*/
	function renderInputErrors(errors: string[]) {
		if (!errors.length) {
			return null;
		}
		return <div className="bg-orange-300 p-1 my-2"> {errors.map((x: string) => <div key={x}>{x}</div>)}</div>;
	}

	function renderInput(inputName: string) {
		const { name, value, errors, isValid } = getInputProps(inputName);
		return (
			<React.Fragment>
				<label>{name}</label>
				<br />
				<input className={inputTextClasses} type="text" name={name} value={value} />
				{renderInputErrors(errors)}
				<div>
					Is input {name} valid ? {'' + isValid}
				</div>
				<br />
			</React.Fragment>
		);
	}

	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>Mix input and form validators</h2>
			<form onChange={handleFormChange} className={formClasses}>
				{renderInput('inputOne')}
				{renderInput('inputTwo')}
			</form>
			<div className="bg-gray-500 p-2">
				<h2>Form informations</h2>
				{renderFormErrors()}
				<div>Is my form valid ? {isFormValid + ''}</div>
			</div>
			<ShowCodeLink codeLink="validator/MixFormAndInputValidator.component.tsx" />
		</div>
	);
}
