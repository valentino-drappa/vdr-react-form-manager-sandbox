import React from 'react';
import { IFormInputProperties } from 'vdr-react-form-manager';

import { FormValuesRendererComponent } from './formValuesRenderer/FormValuesRenderer.component';
import { containerFormAndInputPropsClasses } from '../../constant/App.constant';
import { FormInputPropsRendererContainer } from './formInputPropsRendererContainer/formInputPropsRendererContainer';
import { FormInputPropsRendererComponent } from './formInputPropsRenderer/FormInputPropsRenderer.component';
import { FormPropsRenderer } from './formPropsRenderer/FormPropsRenderer.component';
import { IStateFormProperties } from 'vdr-react-form-manager/lib/interface/form/StateFormProperties.interface';

type Props = {
	formValues: any;
	inputProps: IFormInputProperties[];
	formProps?: IStateFormProperties;
};
export function FormValueAndInputPropsRenderer({ formValues, inputProps, formProps }: Props) {
	function renderFormProps() {
		if (!formProps) {
			return null;
		}
		return <FormPropsRenderer {...formProps} />;
	}
	return (
		<div className={containerFormAndInputPropsClasses}>
			<FormValuesRendererComponent formValues={formValues} />
			{renderFormProps()}
			<FormInputPropsRendererContainer>
				{inputProps.map((x) => <FormInputPropsRendererComponent key={x.name} inputProps={x} />)}
			</FormInputPropsRendererContainer>
		</div>
	);
}
