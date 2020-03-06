import React from 'react';
import { useFormManager, FormInput, IFormInitalState } from 'vdr-react-form-manager';
import { formClasses, inputTextClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';

const formInitalState = {
	formInputs: {
		...FormInput.Builder('checkbox').build()
	},
	formValidators: []
} as IFormInitalState;

export function InputCheckBoxComponent() {
	const { handleFormChange, getInput } = useFormManager(formInitalState);
	const { name, value } = getInput('checkbox');
	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>checkbox</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<label>
					My checkbox&nbsp;
					<input className={inputTextClasses} type="checkbox" name={name} value={value} />
				</label>
			</form>
			<ShowCodeLink codeLink="basic/InputCheckBox.component.tsx" />
		</div>
	);
}
