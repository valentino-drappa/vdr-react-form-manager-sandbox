import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';
import { FormValuesRendererComponent } from '../commons/FormValuesRenderer.component';

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('textaera').build()
	},
	formValidators: []
} as IFormInitalState;

export function InputTextAeraComponent() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const { name, value } = getInputProps('textaera');
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>textaera</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<textarea className={inputTextClasses} name={name} value={value} />
			</form>
			<ShowCodeLink codeLink="basic/InputTextAera.component.tsx" />
			<FormValuesRendererComponent formValues={getFormValues()} />
		</div>
	);
}
