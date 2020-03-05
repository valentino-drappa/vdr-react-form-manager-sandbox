import React from 'react';
import { useFormManager, FormInputData, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInputData.Builder('textaera').build()
	},
	formValidators: []
} as IFormInitalState;

export function InputTextAeraComponent() {
	const { handleFormChange, getInput } = useFormManager(formInitalState);
	const { name, value } = getInput('textaera');
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>textaera</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<textarea className={inputTextClasses} name={name} value={value} />
			</form>
			<ShowCodeLink codeLink="basic/InputTextAera.component.tsx" />
		</div>
	);
}
