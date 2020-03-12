import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses, buttonClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValuesRendererComponent } from '../commons/component/formValuesRenderer/FormValuesRenderer.component';

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('search').build()
	},
	formValidators: []
} as IFormInitalState;

const inputAddedName = 'mynewinput';
const inputAdded = FormInputProperties.Builder(inputAddedName).build();

export function FormAddRemoveInputComponent() {
	const { handleFormChange, getInputProps, removeInputs, addInputs, getFormValues } = useFormManager(formInitalState);

	function renderInput(inputName: string) {
		const { name, value } = getInputProps(inputName);
		if (!name) {
			return null;
		}
		return (
			<React.Fragment>
				<label>{name}</label>
				<input className={inputTextClasses} type="text" name={name} value={value} />
				<br />
			</React.Fragment>
		);
	}

	function renderRemoveInputButton() {
		return (
			<button className={buttonClasses} type="button" onClick={() => removeInputs([inputAddedName])}>
				Remove input
			</button>
		);
	}

	function renderAddInputButton() {
		return (
			<button className={buttonClasses} type="button" onClick={() => addInputs(inputAdded)}>
				Add input
			</button>
		);
	}

	function renderButton() {
		const { name } = getInputProps(inputAddedName);
		return name ? renderRemoveInputButton() : renderAddInputButton();
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>text</h2>
				<form onChange={handleFormChange} className={formClasses}>
					{renderInput('search')}
					{renderInput(inputAddedName)}
				</form>
				<ShowCodeLink codeLink="form/FormAddRemoveInput.component.tsx" />
				<FormValuesRendererComponent formValues={getFormValues()} />
			</div>
			<div className="ml-2 p-3">{renderButton()}</div>
		</React.Fragment>
	);
}
