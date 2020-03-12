import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';

const inputName = 'search';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName).build()
	},
	formValidators: []
} as IFormInitalState;

export function InputText() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { name, value } = inputProps;
	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>text</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<input className={inputTextClasses} type="text" name={name} value={value} />
				</form>
				<ShowCodeLink codeLink="basic/InputText.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
