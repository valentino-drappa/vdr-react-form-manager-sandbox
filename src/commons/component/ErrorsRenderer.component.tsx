import React from 'react';

type Props = {
	errors: string[];
	isTouched: boolean;
};

export const ErrorsRenderer = ({ errors, isTouched }: Props) => {
	function renderErrorItem(error: string) {
		return (
			<span key={error} className="block text-red-700 mt-2">
				<i className="fa fa-exclamation-triangle pr-2" aria-hidden="true" />
				{error}
			</span>
		);
	}

	if (errors.length && isTouched) {
		return <React.Fragment>{errors.map((x) => renderErrorItem(x))}</React.Fragment>;
	}
	return null;
};
