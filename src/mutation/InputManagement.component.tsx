/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useFormManager, FormInputProperties, IFormInitalState } from 'vdr-react-form-manager';
import { inputTextClasses, formClasses, containerClasses, h2Classes } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';
import { ErrorsRenderer } from '../commons/component/ErrorsRenderer.component';
import { getStartWithSuperValidator } from '../commons/validator/StartWithSuper.validators';

const search = 'search';
const disableInputCheckBox = 'disableInputCheckBox';
const setDefaultTextCheckBox = 'setDefaultTextCheckBox';
const addCustomPropertiesCheckBox = 'addCustomPropertiesCheckBox';
const addFormValidatorCheckBox = 'addFormValidatorCheckBox';

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(search).addProperty({ classes: 'border border-gray-600' }).build(),
		...FormInputProperties.Builder(disableInputCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(setDefaultTextCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(addCustomPropertiesCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(addFormValidatorCheckBox).addValue(false).build()
	}
} as IFormInitalState;

export function InputManagement() {
	const { handleFormChange, getInputProps, formProperties, getFormValues, updateInputs } = useFormManager(
		formInitalState
	);
	const searchInput = getInputProps(search);
	const { name, value, errors, customProps, disabled } = searchInput;

	/* [enable|disable] input */
	useEffect(
		() => {
			updateInputs({ [search]: { disabled: getInputProps(disableInputCheckBox).value } });
		},
		[getInputProps(disableInputCheckBox).value]
	);

	/* change input value */
	useEffect(
		() => {
			const inputValue = getInputProps(setDefaultTextCheckBox).value ? 'TEST' : '';
			updateInputs({ [search]: { value: inputValue } });
		},
		[getInputProps(setDefaultTextCheckBox).value]
	);

	/* [add|remove] input props */
	useEffect(
		() => {
			const { value } = getInputProps(addCustomPropertiesCheckBox);
			if (value) {
				updateInputs({ [search]: { customProps: { classes: 'bg-yellow-300 border border-gray-600' } } });
			} else {
				updateInputs({ [search]: { customProps: { classes: 'border border-gray-600' } } });
			}
		},
		[getInputProps(addCustomPropertiesCheckBox).value]
	);

	/* [add|remove] form validator */
	useEffect(
		() => {
			const { value } = getInputProps(addFormValidatorCheckBox);
			if (value) {
				updateInputs({ [search]: { validators: [getStartWithSuperValidator()] } });
			} else {
				updateInputs({ [search]: { validators: [] } });
			}
		},
		[getInputProps(addFormValidatorCheckBox).value]
	);

	/* render form value - filtered to show only the input text */
	function getFilteredFormValues() {
		const formValues = getFormValues() as any;
		return Object.keys(formValues).filter((x) => x === search).reduce(
			(object, key) => ({
				...object,
				[key]: formValues[key]
			}),
			{}
		);
	}

	function renderCheckBox(inputName: string, label: string, desc: string) {
		const { name, value } = getInputProps(inputName);
		const checkUI = value ? 'on text-green-400' : 'off text-gray-600';
		return (
			<label className="block mb-3">
				<i className={`fa fa-toggle-${checkUI}  ml-2 text-2xl mr-3`} aria-hidden="true" />
				<input className="hidden " type="checkbox" name={name} checked={value} />
				{label}
				<span className="text-gray-600">{desc}</span>
			</label>
		);
	}

	function renderButtons() {
		const disableInputCheckBox = 'disableInputCheckBox';
		const setDefaultTextCheckBox = 'setDefaultTextCheckBox';
		const addCustomPropertiesCheckBox = 'addCustomPropertiesCheckBox';
		const addFormValidatorCheckBox = 'addFormValidatorCheckBox';

		return (
			<div className={`p-2 mt-6 mb-4 border border-gray-600 bg-white`}>
				{renderCheckBox(disableInputCheckBox, 'Disable input', '')}
				{renderCheckBox(setDefaultTextCheckBox, 'Set search value to TEST', '')}
				{renderCheckBox(
					addCustomPropertiesCheckBox,
					'Update input custom properties',
					' (change background color)'
				)}
				{renderCheckBox(addFormValidatorCheckBox, 'Add input validator', ' (check if input start with SUPER)')}
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Manage input</h2>
				<form onChange={handleFormChange} className={formClasses}>
					{renderButtons()}
					<label>search</label>
					<input
						className={`${inputTextClasses} ${customProps.classes}`}
						type="text"
						name={name}
						value={value}
						disabled={disabled}
					/>
					<ErrorsRenderer errors={errors} />
				</form>
				<ShowCodeLink codeLink="mutation/InputManagement.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer
				formValues={getFilteredFormValues()}
				inputProps={[searchInput]}
				formProps={formProperties}
			/>
		</React.Fragment>
	);
}
