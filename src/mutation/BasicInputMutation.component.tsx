import React from 'react';
import {
	useFormManager,
	FormInputData,
	IFormInitalState,
	IFormInputMutation,
	IFormInputValidator
} from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses, buttonClassNames } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

class MyRequiredValidator implements IFormInputValidator {
	validate(value: any): string | null {
		if (value.trim() === '') {
			return 'Field is required';
		}
		return null; //no error
	}
}

const formInitalState = {
	formInputs: {
		...FormInputData.Builder('search').build()
	},
	formValidators: []
} as IFormInitalState;

export function BasicInputMutationComponent() {
	const { handleFormChange, getInput, updateInputs } = useFormManager(formInitalState);
	const { name, value, errors, isValid } = getInput('search');

	function changeInputValue() {
		const inputUpdated = {
			search: {
				value: 'TEST'
			}
		} as IFormInputMutation;
		updateInputs(inputUpdated);
	}

	function clearInputValue() {
		const inputUpdated = {
			search: {
				value: ''
			}
		} as IFormInputMutation;
		updateInputs(inputUpdated);
	}

	function addRequiredValidator() {
		const inputUpdated = {
			search: {
				validators: [new MyRequiredValidator()]
			}
		} as IFormInputMutation;
		updateInputs(inputUpdated);
	}

	function removeRequiredValidator() {
		const inputUpdated = {
			search: {
				validators: []
			}
		} as IFormInputMutation;
		updateInputs(inputUpdated);
	}

	function renderInputErrors() {
		if (!errors.length) {
			return null;
		}
		return <div className="bg-orange-300 p-1 my-2"> {errors.map((x: string) => <div key={x}>{x}</div>)}</div>;
	}

	function renderButton(label: string, onClickEvent: any) {
		return (
			<button className={buttonClassNames} type="button" onClick={onClickEvent}>
				{label}
			</button>
		);
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Change input properties</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<input className={inputTextClasses} type="text" name={name} value={value} />
					{renderInputErrors()}
					<hr />
					<div>Is my input valid ? {isValid + ''}</div>
				</form>
				<ShowCodeLink codeLink="mutation/BasicInputMutation.component.tsx" />
			</div>
			<div className="ml-2 p-3">
				{renderButton('Set input value to TEST', changeInputValue)}
				{renderButton('Clear input value', clearInputValue)}
				<br />
				{renderButton('Add required validator', addRequiredValidator)}
				{renderButton('Remove required validator', removeRequiredValidator)}
			</div>
		</React.Fragment>
	);
}
