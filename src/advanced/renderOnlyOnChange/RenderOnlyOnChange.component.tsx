import React from 'react';

import { formClasses, h2Classes, containerClasses } from '../../constant/App.constant';
import { ShowCodeLink } from '../../commons/component/ShowCodeLink.component';

import { IFormInitalState, useFormManager, FormInputProperties } from 'vdr-react-form-manager';
import RenderOnlyOnChangeInput from './RenderOnlyOnChangeInput.component';
import { getStartWithSuperValidator } from '../../commons/validator/StartWithSuper.validators';
import { getEndWithTopValidator } from '../../commons/validator/EndWithTop.validators';

const formInitalState = {
	formInputs: {
		...FormInputProperties.Builder('inputOne')
			.addValue('test')
			.addValidators([getStartWithSuperValidator()])
			.build(),
		...FormInputProperties.Builder('inputTwo').addValidators([getEndWithTopValidator()]).build(),
		...FormInputProperties.Builder('inputThree').addDisabled(true).addValue('already disabled').build()
	}
} as IFormInitalState;

export function RenderOnlyOnChange() {
	const { handleFormChange, getInputProps } = useFormManager(formInitalState);

	return (
		<React.Fragment>
			<div className={containerClasses}>
				<h2 className={h2Classes}>Render input only when value change</h2>
				<form onChange={handleFormChange} className={formClasses}>
					<RenderOnlyOnChangeInput params={getInputProps('inputOne')} />
					<RenderOnlyOnChangeInput params={getInputProps('inputTwo')} />
					<RenderOnlyOnChangeInput params={getInputProps('inputThree')} />
				</form>
				<ShowCodeLink codeLink="advanced/renderOnlyOnChange/RenderOnlyOnChange.component.tsx" />
			</div>
			<div className={containerClasses}>
				<p>
					To render only when inputs change, combine React.memo + input.updateId. Open the console to show
					wich component is rendered
				</p>
				<ShowCodeLink codeLink="advanced/renderOnlyOnChange/RenderOnlyOnChangeInput.component.tsx" />
			</div>
		</React.Fragment>
	);
}
