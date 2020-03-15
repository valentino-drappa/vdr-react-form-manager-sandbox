import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';

const inputName = 'comment';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName).build()
	},
	formValidators: []
} as IFormInitalState;

export function InputTextAera() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { name, value } = inputProps;

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>textaera</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<textarea className={inputTextClasses} name={name} value={value} />
				</form>
				<ShowCodeLink codeLink="basic/InputTextAera.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
