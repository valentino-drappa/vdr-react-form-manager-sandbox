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
import { getStartWithSuperValidator } from '../commons/validator/StartWithSuper.validators';
import { getEndWithTopValidator } from '../commons/validator/EndWithTop.validators';

const text1 = 'text1';
const text2 = 'text2';

/* cross fields validation */
class MyFormValidator implements IFormValidator {
	validateForm(formInputs: IStateInputs): string | null {
		const inputOne: FormInputProperties = formInputs[text1];
		const inputTwo: FormInputProperties = formInputs[text2];
		if (inputOne.value !== inputTwo.value) {
			return 'Inputs must have the same value';
		}
		return null;
	}
}

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(text1).addValidators([getStartWithSuperValidator()]).build(),
		...FormInputProperties.Builder(text2).addValidators([getEndWithTopValidator()]).build()
	},
	formValidators: [new MyFormValidator()]
} as IFormInitalState;

export function MixFormAndInputValidators() {
	const { handleFormChange, getInputProps, formProperties, getFormValues } = useFormManager(formInitalState);

	function renderInput(inputName: string) {
		const { name, value, errors, isTouched } = getInputProps(inputName);
		return (
			<React.Fragment>
				<label>{name}</label>
				<br />
				<input className={inputTextClasses} type="text" name={name} value={value} />
				<ErrorsRenderer errors={errors} isTouched={isTouched} />
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Mix input and form validators</h2>
				<form onChange={handleFormChange} className={formClasses}>
					{renderInput(text1)}
					{renderInput(text2)}
				</form>
				<ErrorsRenderer errors={formProperties.formErrors} isTouched={formProperties.isFormTouched} />
				<ShowCodeLink codeLink="validator/MixFormAndInputValidator.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer
				formValues={getFormValues()}
				inputProps={[getInputProps(text1), getInputProps(text2)]}
				formProps={formProperties}
			/>
		</React.Fragment>
	);
}
