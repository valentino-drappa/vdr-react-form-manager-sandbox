import React from 'react';
import { useFormManager, FormInput, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('login').build(),
		...FormInput.Builder('password').build()
	},
	formValidators: []
} as IFormInitalState;

export function FormGetValuesComponent() {
	const { handleFormChange, getInput, getFormValues } = useFormManager(formInitalState);

	function renderInput(inputName: string, type: string) {
		const { name, value } = getInput(inputName);
		return (
			<div className="mb-2">
				<span className="inline-block pr-2">{name}</span>
				<input className={inputTextClasses} type={type} name={name} value={value} />
			</div>
		);
	}

	function renderFormValues() {
		return (
			<React.Fragment>
				<hr />
				<div className="my-2">Form values</div>
				<code>{`${JSON.stringify(getFormValues())}`}</code>
			</React.Fragment>
		);
	}
	console.log(getFormValues());
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>Get form values</h2>
			<form onChange={handleFormChange} className={formClasses}>
				{renderInput('login', 'text')}
				{renderInput('password', 'password')}
				{renderFormValues()}
			</form>
			<ShowCodeLink codeLink="form/FormGetValues.component.tsx" />
		</div>
	);
}
