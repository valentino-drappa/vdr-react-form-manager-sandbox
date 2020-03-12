import React from 'react';
import {
	useFormManager,
	FormInputProperties,
	IFormInitalState,
	IStateInputs,
	IFormValidator
} from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { ErrorsRenderer } from '../commons/component/ErrorsRenderer.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';
import { FormPropsRenderer } from '../commons/component/formPropsRenderer/FormPropsRenderer.component';

const firstName = 'text1';
const lastName = 'text2';

/* cross fields validation */
class MyFormValidator implements IFormValidator {
	validateForm(formInputs: IStateInputs): string | null {
		const inputOne: FormInputProperties = formInputs[firstName];
		const inputTwo: FormInputProperties = formInputs[lastName];
		if (inputOne.value !== inputTwo.value) {
			return 'Inputs must have the same value';
		}
		return null;
	}
}

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(firstName).addValue('test').build(),
		...FormInputProperties.Builder(lastName).build()
	},
	formValidators: [new MyFormValidator()]
} as IFormInitalState;

export function FormValidatorComponent() {
	const { handleFormChange, getInputProps, formErrors, getFormValues, isFormValid, isFormDisabled } = useFormManager(
		formInitalState
	);

	function renderInput(inputName: string) {
		const { name, value } = getInputProps(inputName);
		return <input className={`${inputTextClasses} mb-2`} type="text" name={name} value={value} />;
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Form validator</h2>
				<form onChange={handleFormChange} className={formClasses}>
					{renderInput(firstName)}
					<br />
					{renderInput(lastName)}
				</form>
				<ErrorsRenderer errors={formErrors} />
				<ShowCodeLink codeLink="validator/FormValidator.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer
				formValues={getFormValues()}
				inputProps={[getInputProps(firstName), getInputProps(lastName)]}
				formProps={{ isFormValid, isFormDisabled, formErrors }}
			/>
		</React.Fragment>
	);
}
