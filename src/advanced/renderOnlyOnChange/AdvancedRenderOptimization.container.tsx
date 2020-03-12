import React from 'react';

import { formClasses, h2Classes, containerClasses, buttonClasses } from '../../constant/App.constant';
import { ShowCodeLink } from '../../commons/component/ShowCodeLink.component';

import {
	IFormInputValidator,
	IFormInitalState,
	useFormManager,
	FormInputProperties,
	IFormPropertiesMutation
} from 'vdr-react-form-manager';
import AdvancedRenderOptimizationInputComponent from './AdvancedRenderOptimizationInput.component';

class MySuperValidator implements IFormInputValidator {
	validate(value: any): string | null {
		if (!value.startsWith('SUPER')) {
			return 'Input must start with SUPER';
		}
		return null; //no error
	}
}

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('inputOne').addValue('test').addValidators([new MySuperValidator()]).build(),
		...FormInputProperties.Builder('inputTwo').addValidators([new MySuperValidator()]).build(),
		...FormInputProperties.Builder('inputThree').addDisabled(true).addValue('already disabled').build()
	}
} as IFormInitalState;

export function RenderOnlyOnChangeContainer() {
	const { handleFormChange, getInputProps, validateInputs, updateFormProps, resetForm } = useFormManager(
		formInitalState
	);

	function renderButtons() {
		return (
			<div>
				<p className="m-2">View wich component is rendered in the console</p>
				<button type="button" className={buttonClasses} onClick={() => resetForm()}>
					Reset Form
				</button>
				<br />
				<button type="button" className={buttonClasses} onClick={() => validateInputs()}>
					Validate inputs
				</button>
				<br />
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
				<h2 className={h2Classes}>Render input only when value change</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<AdvancedRenderOptimizationInputComponent params={getInputProps('inputOne')} />
					<br />
					<AdvancedRenderOptimizationInputComponent params={getInputProps('inputTwo')} />
					<hr />
					<AdvancedRenderOptimizationInputComponent params={getInputProps('inputThree')} />
					<hr />
				</form>
				<ShowCodeLink codeLink="validator/FormValidator.component.tsx" />
			</div>
			<div className="ml-2 p-3">{renderButtons()}</div>
		</React.Fragment>
	);
}
