import React from 'react';
import { useFormManager, FormInput, IFormInitalState, IStateInputs, IFormValidator } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses, buttonClassNames } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

/* cross fields validation */
class MyFormValidator implements IFormValidator {
	validateForm(formInputs: IStateInputs): string | null {
		const myInputOne: FormInput = formInputs['inputOne'];
		const myInputTwo: FormInput = formInputs['inputTwo'];
		if (myInputOne.value !== myInputTwo.value) {
			return 'Inputs must have the same value';
		}
		return null;
	}
}

const formInitalState = {
	formInputs: {
		...FormInput.Builder('inputOne').addValue('test').build(),
		...FormInput.Builder('inputTwo').build()
	},
	formValidators: [new MyFormValidator()]
} as IFormInitalState;

export function FormResetComponent() {
	const { handleFormChange, getInput, formErrors, resetForm, isFormValid } = useFormManager(formInitalState);

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

	function renderButton(label: string) {
		return (
			<button className={buttonClassNames} type="button" onClick={resetForm}>
				{label}
			</button>
		);
	}

	return (
		<React.Fragment>
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
				<ShowCodeLink codeLink="form/FormReset.component.tsx" />
			</div>
			<div className="ml-2 p-3">{renderButton('Reset form')}</div>
		</React.Fragment>
	);
}
