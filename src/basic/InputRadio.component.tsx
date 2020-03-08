import React from 'react';
import {
	useFormManager,
	FormInputProperties,
	IFormInitalState,
	IFormInputAvailableValue
} from 'vdr-react-form-manager';
import { formClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/ShowCodeLink.component';
import { FormValuesRendererComponent } from '../commons/FormValuesRenderer.component';

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('myradiobox')
			.addAvailableValue({ value: '0', label: 'MAN' } as IFormInputAvailableValue)
			.addAvailableValue({ value: '1', label: 'WOMAN' } as IFormInputAvailableValue)
			.addAvailableValue({ value: '2', label: 'UNKNOW' } as IFormInputAvailableValue)
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function InputRadioComponent() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const { availableValues } = getInputProps('myradiobox');

	function renderRadio({ value, label }: IFormInputAvailableValue) {
		return (
			<label key={value} className="inline-block pr-3">
				{label}&nbsp;<input type="radio" value={value} name="myradiobox" />
			</label>
		);
	}

	return (
		<div className={containerClasses}>
			<h2 className={h2Classes}>radio</h2>
			<form onChange={handleFormChange} className={formClasses}>
				<label>
					My radio&nbsp;
					{availableValues.map((x: IFormInputAvailableValue) => renderRadio(x))}
				</label>
			</form>
			<ShowCodeLink codeLink="basic/InputRadio.component.tsx" />
			<FormValuesRendererComponent formValues={getFormValues()} />
		</div>
	);
}
