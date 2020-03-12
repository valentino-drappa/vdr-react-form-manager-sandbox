import React from 'react';
import { IFormInputProperties } from 'vdr-react-form-manager';

import { FormValuesRendererComponent } from './formValuesRenderer/FormValuesRenderer.component';
import { containerFormAndInputPropsClasses } from '../../constant/App.constant';
import { FormInputPropsRendererContainer } from './formInputPropsRendererContainer/formInputPropsRendererContainer';
import { FormInputPropsRendererComponent } from './formInputPropsRenderer/FormInputPropsRenderer.component';

type Props = {
	formValues: any;
	inputProps: IFormInputProperties[];
};
export function FormValueAndInputPropsRenderer({ formValues, inputProps }: Props) {
	return (
		<div className={containerFormAndInputPropsClasses}>
			<FormValuesRendererComponent formValues={formValues} />
			<FormInputPropsRendererContainer>
				{inputProps.map((x) => <FormInputPropsRendererComponent key={x.name} inputProps={x} />)}
			</FormInputPropsRendererContainer>
		</div>
	);
}
