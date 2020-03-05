import React from 'react';
import {
	useFormManager,
	FormInputData,
	EFormInputType,
	IFormInitalState,
	IFormInputValidator
} from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

class MySuperValidator implements IFormInputValidator {
	validate(value: any): string | null {
		if (!value || value !== 'SUPER') {
			return 'SUPER is required';
		}
		return null; //no error
	}
}

const formInitalState = {
	formInputs: {
		...FormInputData.Builder(EFormInputType.INPUT_TYPE_TEXT, 'search')
			.addValidators([new MySuperValidator()])
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function SingleTextValidatorComponent() {
	const { handleFormChange, getInput } = useFormManager(formInitalState);
	const { name, value, isValid, errors } = getInput('search');

	function renderInputErrors() {
		if (!errors.length) {
			return null;
		}
		return <div className="bg-orange-300 p-1 my-2"> {errors.map((x: string) => <div key={x}>{x}</div>)}</div>;
	}

	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>Single input validator</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<input className={inputTextClasses} type="text" name={name} value={value} />
				{renderInputErrors()}
				<hr />
				<div>Is my input valid ? {isValid + ''}</div>
			</form>
			<ShowCodeLink codeLink="validators/SingleInputTextValidator.component.tsx" />
		</div>
	);
}
