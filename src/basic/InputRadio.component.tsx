import React from 'react';
import {
	useFormManager,
	FormInputProperties,
	IFormInitalState,
	IFormInputAvailableValue
} from 'vdr-react-form-manager';
import { formClasses, h2Classes, containerClasses } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';

const inputName = 'gender';
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(inputName)
			.addAvailableValue({ value: '0', label: 'MAN' } as IFormInputAvailableValue)
			.addAvailableValue({ value: '1', label: 'WOMAN' } as IFormInputAvailableValue)
			.addAvailableValue({ value: '2', label: 'UNKNOW' } as IFormInputAvailableValue)
			.build()
	},
	formValidators: []
} as IFormInitalState;

export function InputRadio() {
	const { handleFormChange, getInputProps, getFormValues } = useFormManager(formInitalState);
	const inputProps = getInputProps(inputName);
	const { availableValues } = inputProps;

	function renderRadio({ value, label }: IFormInputAvailableValue) {
		return (
			<label key={value} className="inline-block pr-3">
				{label}&nbsp;<input type="radio" value={value} name={inputName} />
			</label>
		);
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>radio</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<label>
						Gender<br />
						{availableValues.map((x: IFormInputAvailableValue) => renderRadio(x))}
					</label>
				</form>
				<ShowCodeLink codeLink="basic/InputRadio.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer formValues={getFormValues()} inputProps={[inputProps]} />
		</React.Fragment>
	);
}
