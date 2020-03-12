import React from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { ErrorsRenderer } from '../commons/component/ErrorsRenderer.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';
import { getEndWithTopValidator } from '../commons/validator/EndWithTop.validators';
import { getStartWithSuperValidator } from '../commons/validator/StartWithSuper.validators';

const inputName = 'search';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName)
			.addValidators([getStartWithSuperValidator(), getEndWithTopValidator()])
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function MultipleInputTextValidators() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { name, value, errors } = inputProps;

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Multiple validators</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<input className={inputTextClasses} type="text" name={name} value={value} />
					<ErrorsRenderer errors={errors} />
				</form>
				<ShowCodeLink codeLink="validator/MultipleInputTextValidator.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
