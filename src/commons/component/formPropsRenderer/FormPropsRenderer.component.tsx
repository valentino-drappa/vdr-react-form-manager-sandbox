import React from 'react';
import { IFormValidator, IKeyAny } from 'vdr-react-form-manager';

type Props = {
	formValidators: IFormValidator[];
	isFormDisabled: boolean;
	isFormValid: boolean;
	isFormTouched: boolean;
	isFormPristine: boolean;
	formErrors: string[];
	formCustomsProps: IKeyAny;
};

export const FormPropsRenderer = ({
	formValidators,
	formCustomsProps,
	isFormValid,
	isFormTouched,
	isFormPristine,
	isFormDisabled,
	formErrors
}: Props) => {
	function renderFormPropItem(name: string, value?: any) {
		return (
			<li>
				<span className="inline-block mr-1 font-">{name}:</span>
				<span className="font-light">{value}</span>
			</li>
		);
	}

	return (
		<React.Fragment>
			<div className="input-props-title mt-3 mb-3 font-medium">Form Props</div>
			<ul>
				{renderFormPropItem('isFormValid', isFormValid + '')}
				{renderFormPropItem('isFormDisabled', isFormDisabled + '')}
				{renderFormPropItem('isFormTouched', isFormTouched + '')}
				{renderFormPropItem('isFormPristine', isFormPristine + '')}
				{renderFormPropItem('errors', JSON.stringify(formErrors))}
				{renderFormPropItem('validators', formValidators.map((x) => x.constructor.name))}
				{renderFormPropItem('custom props', JSON.stringify(formCustomsProps))}
			</ul>
		</React.Fragment>
	);
};
