import React from 'react';

type Props = {
	formValues: any;
};

export function FormValuesRendererComponent({ formValues }: Props) {
	return (
		<React.Fragment>
			<hr />
			<div className="my-2">Form values</div>
			<code>{`${JSON.stringify(formValues)}`}</code>
		</React.Fragment>
	);
}
