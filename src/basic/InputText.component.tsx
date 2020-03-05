import React from 'react';
import { useFormManager, FormInputData, EFormInputType, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInputData.Builder(EFormInputType.INPUT_TYPE_TEXT, 'search').build()
	},
	formValidators: []
} as IFormInitalState;

export function InputTextComponent() {
	const { handleFormChange, getInput } = useFormManager(formInitalState);
	const { name, value, type } = getInput('search');
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>text</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<input className={inputTextClasses} type={type.toString()} name={name} value={value} />
			</form>
			<ShowCodeLink codeLink="basic/InputText.component.tsx" />
		</div>
	);
}
