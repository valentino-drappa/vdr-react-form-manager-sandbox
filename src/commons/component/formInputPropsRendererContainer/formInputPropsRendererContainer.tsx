import React from 'react';
import './formInputPropsRendererContainer.css';

type Props = {
	children: any;
};

export const FormInputPropsRendererContainer = ({ children }: Props) => {
	return (
		<React.Fragment>
			<div className="input-props-title mt-3 mb-3 font-medium">Input Props</div>
			<div className="overflow-auto">{children}</div>
		</React.Fragment>
	);
};
