import React from 'react';
import './FormValuesRenderer.component.css';

type Props = {
	formValues: any;
};

export function FormValuesRendererComponent({ formValues }: Props) {
	return (
		<React.Fragment>
			<div className="form-value-title mb-3 font-medium">Form values</div>
			<div className="overflow-x-auto">{`${JSON.stringify(formValues)}`}</div>
		</React.Fragment>
	);
}
