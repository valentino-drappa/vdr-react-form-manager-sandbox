import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';

const inputName = 'stayConnected';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName).addValue(false).build()
	},
	formValidators: []
} as IFormInitalState;

export function InputCheckBox() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { name } = inputProps;

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>checkbox</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<label>
						Stay connected?&nbsp;
						<input type="checkbox" name={name} />
					</label>
				</form>
				<ShowCodeLink codeLink="basic/InputCheckBox.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
