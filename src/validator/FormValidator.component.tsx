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
		...FormInputProperties.Builder(text1).addValue('test').build(),
		...FormInputProperties.Builder(text2).build()
	},
	formValidators: [new MyFormValidator()]
} as IFormInitalState;

export function FormValidator() {
	const { handleFormChange, getInputProps, formProperties, getFormValues } = useFormManager(formInitalState);

	function renderInput(inputName: string) {
		const { name, value } = getInputProps(inputName);
		return <input className={`${inputTextClasses} mb-2`} type="text" name={name} value={value} />;
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Form validator</h2>
				<form onChange={handleFormChange} className={formClasses}>
					{renderInput(text1)}
					<br />
					{renderInput(text2)}
				</form>
				<ErrorsRenderer errors={formProperties.formErrors} />
				<ShowCodeLink codeLink="validator/FormValidator.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer
				formValues={getFormValues()}
				inputProps={[getInputProps(text1), getInputProps(text2)]}
				formProps={formProperties}
			/>
		</React.Fragment>
	);
}
