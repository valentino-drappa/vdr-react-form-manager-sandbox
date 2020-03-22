/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
	useFormManager,
	FormInputProperties,
	IFormInitalState,
	IFormInputProperties,
	IFormValidator,
	IStateInputs
} from 'vdr-react-form-manager';
import { inputTextClasses, containerClasses, h2Classes } from '../constant/App.constant';
import { ShowCodeLink } from '../commons/component/ShowCodeLink.component';
import { FormValueAndInputPropsRenderer } from '../commons/component/FormValueAndInputPropsRenderer';
import { ErrorsRenderer } from '../commons/component/ErrorsRenderer.component';
import { IKeyAny } from 'vdr-react-form-manager';

const firstName = 'myfirstname';
const lastName = 'mylastname';
const adress = 'myadress';
const disableFormCheckBox = 'disableFormCheckBox';
const classeNamesCheckBox = 'classeNamesCheckBox';
const addLastNameCheckBox = 'addLastNameCheckBox';
const addFormCustomPropertiesCheckBox = 'addFormCustomPropertiesCheckBox';
const addFormValidatorCheckBox = 'addFormValidatorCheckBox';

/* cross fields validation */
class FirstNameAndAdressNotEqualsValidator implements IFormValidator {
	validateForm(formInputs: IStateInputs): string | null {
		const inputOne: FormInputProperties = formInputs[firstName];
		const inputTwo: FormInputProperties = formInputs[adress];
		if (inputOne.value === inputTwo.value) {
			return 'FirstName and Adress can not have the same value';
		}
		return null;
	}
}

const firstNameAndAdressNotEqualsValidator = new FirstNameAndAdressNotEqualsValidator();
const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder(firstName).build(),
		...FormInputProperties.Builder(adress).addValue('adress disabled').addDisabled(true).build(),
		...FormInputProperties.Builder(disableFormCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(addLastNameCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(classeNamesCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(addFormCustomPropertiesCheckBox).addValue(false).build(),
		...FormInputProperties.Builder(addFormValidatorCheckBox).addValue(false).build()
	},
	formClassNames: ['bg-white'],
	formCustomsProps: { userMessage: null }
} as IFormInitalState;

export function FormManagement() {
	const {
		handleFormChange,
		validateInputs,
		getInputProps,
		resetForm,
		setFormProps,
		addInputs,
		removeInputs,
		getFormValues,
		hasInput,
		formProperties
	} = useFormManager(formInitalState);

	/* render input properties */
	function getFilteredInputs(): IFormInputProperties[] {
		let _lastName = hasInput(lastName) ? [getInputProps(lastName)] : [];
		return _lastName.concat([getInputProps(firstName), getInputProps(adress)]);
	}

	/* render form value - filtered to show only the input text */
	function getFilteredFormValues() {
		const formValues = getFormValues() as any;
		return Object.keys(formValues).filter((x) => x.startsWith('my')).reduce(
			(object, key) => ({
				...object,
				[key]: formValues[key]
			}),
			{}
		);
	}

	/* [enable|disable] form */
	useEffect(
		() => {
			setFormProps({ isFormDisabled: getInputProps(disableFormCheckBox).value });
		},
		[getInputProps(disableFormCheckBox).value]
	);

	/* [add|remove] lastname*/
	useEffect(
		() => {
			const { value } = getInputProps(addLastNameCheckBox);
			if (value) {
				addInputs({ ...FormInputProperties.Builder(lastName).build() });
			} else {
				removeInputs([lastName]);
			}
		},
		[getInputProps(addLastNameCheckBox).value]
	);

	/* [add|remove] formProperties */
	useEffect(
		() => {
			const { value } = getInputProps(addFormCustomPropertiesCheckBox);
			if (value) {
				setFormProps({ formCustomsProps: { userMessage: 'This message comes from a custom props' } });
			} else {
				setFormProps({ formCustomsProps: { userMessage: null } });
			}
		},
		[getInputProps(addFormCustomPropertiesCheckBox).value]
	);

	/* [add|remove] formClasses */
	useEffect(
		() => {
			const { value } = getInputProps(classeNamesCheckBox);
			if (value) {
				setFormProps({ formClasseNames: ['bg-red-200'] });
			} else {
				setFormProps({ formClasseNames: ['bg-white'] });
			}
		},
		[getInputProps(classeNamesCheckBox).value]
	);

	/* [add|remove] form validator */
	useEffect(
		() => {
			const { value } = getInputProps(addFormValidatorCheckBox);
			if (value) {
				setFormProps({ formValidators: [firstNameAndAdressNotEqualsValidator] });
			} else {
				setFormProps({ formValidators: [] });
			}
		},
		[getInputProps(addFormValidatorCheckBox).value]
	);

	function renderInput(inputName: string) {
		const { name, value, disabled, errors, isTouched } = getInputProps(inputName) || {};
		if (!name) {
			return;
		}
		return (
			<div className="mb-2">
				<span className="inline-block pr-2">{name}</span>
				<input className={inputTextClasses} type="text" name={name} value={value} disabled={disabled} />
				<ErrorsRenderer errors={errors} isTouched={isTouched} />
			</div>
		);
	}

	function renderUserMessage({ userMessage }: IKeyAny) {
		if (!userMessage) {
			return null;
		}
		return (
			<div className="my-3 p-2 bg-yellow-200 border border-gray-400">
				<i className="fa fa-commenting-o pr-2" aria-hidden="true" />
				{userMessage}
			</div>
		);
	}

	function renderCheckBox(inputName: string, label: string, desc: string) {
		const { name, value } = getInputProps(inputName);
		const checkUI = value ? 'on text-green-400' : 'off text-gray-600';
		return (
			<label className="block mb-3 md:py-1 hover:bg-gray-200">
				<i className={`fa fa-toggle-${checkUI}  ml-2 text-2xl mr-3`} aria-hidden="true" />
				<input className="hidden " type="checkbox" name={name} checked={value} />
				{label}
				<span className="text-gray-600">{desc}</span>
			</label>
		);
	}

	function renderButtons() {
		const { formClasseNames } = formProperties;
		return (
			<div className={`p-2 mt-6 border border-gray-600 ${formClasseNames.join(' ')}`}>
				{renderCheckBox(disableFormCheckBox, 'Disable Form', '')}
				{renderCheckBox(addLastNameCheckBox, 'Add input', ' (add input mylastname)')}
				{renderCheckBox(classeNamesCheckBox, 'Change form class', '(change background color)')}
				{renderCheckBox(
					addFormCustomPropertiesCheckBox,
					'Update form custom properties',
					' (show a user message)'
				)}
				{renderCheckBox(
					addFormValidatorCheckBox,
					'Add form validator',
					' (Error if myfirstname and myadress are equals)'
				)}
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<div className=" flex flex-row justify-between">
					<h2 className={h2Classes}>Enable - Disable form</h2>
					<button className="mr-2" onClick={() => resetForm()}>
						<i className="fa fa-refresh text-2xl" aria-hidden="true" />
					</button>
				</div>
				<form onChange={handleFormChange}>
					{renderButtons()}
					{renderInput(firstName)}
					{renderInput(lastName)}
					{renderInput(adress)}
					{renderUserMessage(formProperties.formCustomsProps)}
					<ErrorsRenderer errors={formProperties.formErrors} isTouched={formProperties.isFormTouched} />
				</form>
				<ShowCodeLink codeLink="form/FormDisable.component.tsx" />
			</div>
			<FormValueAndInputPropsRenderer
				formValues={getFilteredFormValues()}
				inputProps={getFilteredInputs()}
				formProps={formProperties}
			/>
		</React.Fragment>
	);
}
