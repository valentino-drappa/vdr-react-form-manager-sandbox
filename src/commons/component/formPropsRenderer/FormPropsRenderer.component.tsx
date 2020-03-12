import React from 'react';

type Props = {
	isFormValid: boolean;
	isFormDisabled: boolean;
	formErrors: string[];
};

export const FormPropsRenderer = ({ isFormValid, isFormDisabled, formErrors }: Props) => {
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
				{renderFormPropItem('formErrors', JSON.stringify(formErrors))}
			</ul>
		</React.Fragment>
	);
};
