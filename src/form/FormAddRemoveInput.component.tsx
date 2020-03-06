import React from 'react';
import { useFormManager, FormInput, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses, buttonClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('search').build()
	},
	formValidators: []
} as IFormInitalState;

const inputAddedName = 'mynewinput';
const inputAdded = FormInput.Builder(inputAddedName).build();

export function FormAddRemoveInputComponent() {
	const { handleFormChange, getInput, removeInputs, addInputs } = useFormManager(formInitalState);

	function renderInput(inputName: string) {
		const { name, value } = getInput(inputName);
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
		const { name } = getInput(inputAddedName);
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
			</div>
			<div className="ml-2 p-3">{renderButton()}</div>
		</React.Fragment>
	);
}
