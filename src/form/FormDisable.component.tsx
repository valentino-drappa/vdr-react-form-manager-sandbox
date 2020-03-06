import React from 'react';
import { useFormManager, FormInput, IFormInitalState, IFormPropertiesMutation } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses, buttonClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('name').build(),
		...FormInput.Builder('lastname').build(),
		...FormInput.Builder('adress').addValue('i am already disabled').addDisabled(true).build()
	},
	formValidators: []
} as IFormInitalState;

export function FormDisableComponent() {
	const { handleFormChange, getInput, updateFormProps } = useFormManager(formInitalState);

	function renderInput(inputName: string) {
		const { name, value, disabled } = getInput(inputName);
		return (
			<div className="mb-2">
				<span className="inline-block pr-2">{name}</span>
				<input className={inputTextClasses} type="text" name={name} value={value} disabled={disabled} />
			</div>
		);
	}

	function renderButtons() {
		return (
			<div>
				<button
					type="button"
					className={buttonClasses}
					onClick={() => updateFormProps({ isFormDisabled: true } as IFormPropertiesMutation)}
				>
					Disable form
				</button>
				<button
					type="button"
					className={buttonClasses}
					onClick={() => updateFormProps({ isFormDisabled: false } as IFormPropertiesMutation)}
				>
					Enable form
				</button>
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Enable - Disable form</h2>
				<form onChange={handleFormChange} className={formClasses}>
					{renderInput('name')}
					{renderInput('lastname')}
					{renderInput('adress')}
				</form>
				<ShowCodeLink codeLink="form/FormDisable.component.tsx" />
				<hr />
				<span className="inline-block my-2 p-2">
					The original input.disabled value is saved,<br />so the 'Enable form' restore this original value.
				</span>
			</div>
			<div className="ml-2 p-3">{renderButtons()}</div>
		</React.Fragment>
	);
}
