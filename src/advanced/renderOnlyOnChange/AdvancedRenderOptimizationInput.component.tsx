import React, { memo } from 'react';
import { inputTextClasses } from '../../constant/App.constant';
import { InputProps } from '../../types/InputProps.type';
import { inputPropsAreEquals } from '../../utils/formInputProperties.utils';

const AdvancedRenderOptimizationInputComponent = memo(({ params }: InputProps) => {
	console.log(params.name, ' rendered');
	const { name, value, errors, disabled } = params;

	function renderInputErrors() {
		if (!errors.length) {
			return null;
		}
		return <div className="bg-orange-300 p-1 my-2"> {errors.map((x: string) => <div key={x}>{x}</div>)}</div>;
	}

	return (
		<React.Fragment>
			<input className={inputTextClasses} type="text" name={name} value={value} disabled={disabled} />
			{renderInputErrors()}
		</React.Fragment>
	);
}, inputPropsAreEquals);

export default AdvancedRenderOptimizationInputComponent;
