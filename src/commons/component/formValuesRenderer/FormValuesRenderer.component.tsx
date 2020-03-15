import React from 'react';
import './FormValuesRenderer.component.css';
import { format2JSON } from '../../../utils/Json.utils';

type Props = {
	formValues: any;
};

export function FormValuesRendererComponent({ formValues }: Props) {
	return (
		<React.Fragment>
			<div className="form-value-title mb-3 font-medium">Form values</div>
			<pre className="overflow-x-auto bg-gray-200 p-1">{format2JSON(formValues)}</pre>
		</React.Fragment>
	);
}
