import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';
import { ErrorsRenderer } from '../commons/component/ErrorsRenderer.component';
import { getStartWithSuperValidator } from '../commons/validator/StartWithSuper.validators';

const inputName = 'search';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName).addValidators([getStartWithSuperValidator()]).build()
	},
	formValidators: []
} as IFormInitalState;

export function SingleTextValidator() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { name, value, errors, isTouched } = inputProps;

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Single validator</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<input className={inputTextClasses} type="text" name={name} value={value} />
					<ErrorsRenderer errors={errors} isTouched={isTouched} />
				</form>
				<ShowCodeLink codeLink="validator/SingleInputTextValidator.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
