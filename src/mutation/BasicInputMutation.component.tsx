import React from 'react';
import {
	useFormManager,
	FormInputData,
	EFormInputType,
	IFormInitalState,
	IFormInputMutation,
	IFormInputValidator
} from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';

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
		...FormInputData.Builder(EFormInputType.INPUT_TYPE_TEXT, 'search').build()
	},
	formValidators: []
} as IFormInitalState;

export function BasicInputMutationComponent() {
	const { handleFormChange, getInput, updateInputs } = useFormManager(formInitalState);
	const { name, value, type, errors, isValid } = getInput('search');

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

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Change input properties</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<input className={inputTextClasses} type={type.toString()} name={name} value={value} />
					{renderInputErrors()}
					<hr />
					<div>Is my input valid ? {isValid + ''}</div>
				</form>
			</div>
			<div className="ml-2 p-3">
				<button className="p-1 bg-blue-300 m-2" type="button" onClick={changeInputValue}>
					Set input value to TEST
				</button>
				<button className="p-1 bg-blue-300 m-2" type="button" onClick={clearInputValue}>
					Clear input value
				</button>
				<br />
				<button className="p-1 bg-blue-300 m-2" type="button" onClick={addRequiredValidator}>
					Add required validator
				</button>
				<button className="p-1 bg-blue-300 m-2" type="button" onClick={removeRequiredValidator}>
					Remove required validator
				</button>
			</div>
		</React.Fragment>
	);
}
