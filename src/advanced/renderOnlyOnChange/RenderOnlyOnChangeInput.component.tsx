import React, { memo } from 'react';
import { inputTextClasses } from '../../constant/App.constant';
import { InputProps } from '../../types/InputProps.type';
import { inputPropsAreEquals } from '../../utils/formInputProperties.utils';
import { ErrorsRenderer } from '../../commons/component/ErrorsRenderer.component';

const RenderOnlyOnChangeInput = memo(({ params }: InputProps) => {
	console.log(params.name, ' rendered');
	const { name, value, errors, disabled, isTouched } = params;

	return (
		<label className="block mb-1">
			{name}
			<input className={inputTextClasses} type="text" name={name} value={value} disabled={disabled} />
			<ErrorsRenderer errors={errors} isTouched={isTouched} />
		</label>
	);
}, inputPropsAreEquals);

export default RenderOnlyOnChangeInput;
