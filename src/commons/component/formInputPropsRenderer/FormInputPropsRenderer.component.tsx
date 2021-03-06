import React from 'react';
import { IFormInputProperties } from 'vdr-react-form-manager';
import './FormInputPropsRenderer.component.css';

type Props = {
	inputProps: IFormInputProperties;
};

export function FormInputPropsRendererComponent({ inputProps }: Props) {
	function renderInputProps(name: string, value?: any) {
		return (
			<li>
				<span className="inline-block mr-1 font-">{name}:</span>
				<span className="font-light">{`${value}`}</span>
			</li>
		);
	}

	return (
		<React.Fragment>
			<ul className="overflow-x-auto">
				{renderInputProps('name', inputProps.name)}
				{renderInputProps('id', inputProps.id)}
				{renderInputProps('value', inputProps.value)}
				{renderInputProps('label', inputProps.label)}
				{renderInputProps('isValid', inputProps.isValid)}
				{renderInputProps('errors', inputProps.errors)}
				{renderInputProps('classNames', inputProps.classNames)}
				{renderInputProps('validators', inputProps.validators.map((x) => x.constructor.name))}
				{renderInputProps('availableValues', JSON.stringify(inputProps.availableValues))}
				{renderInputProps('disabled', inputProps.disabled)}
				{renderInputProps('isTouched', inputProps.isTouched)}
				{renderInputProps('isPristine', inputProps.isPristine)}
				{renderInputProps('customProperties', JSON.stringify(inputProps.customProps))}
				{renderInputProps('updateId', inputProps.updateId)}
			</ul>
		</React.Fragment>
	);
}
