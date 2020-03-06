import React from 'react';
import { useFormManager, FormInput, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';
import { FormValuesRendererComponent } from '../commons/FormValuesRenderer.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('search').build()
	},
	formValidators: []
} as IFormInitalState;

export function InputTextComponent() {
	console.log('InputTextComponent');
	const { handleFormChange, getInput, getFormValues } = useFormManager(formInitalState);
	const { name, value } = getInput('search');
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>text</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<input className={inputTextClasses} type="text" name={name} value={value} />
			</form>
			<ShowCodeLink codeLink="basic/InputText.component.tsx" />
			<FormValuesRendererComponent formValues={getFormValues()} />
		</div>
	);
}
