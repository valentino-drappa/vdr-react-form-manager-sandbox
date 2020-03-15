import React from 'react';
import { codeRepo } from '../../constant/App.constant';

type Props = {
	codeLink: string;
};

export function ShowCodeLink({ codeLink }: Props) {
	return (
		<div className="pl-2 text-blue-700 underline">
			<a href={`${codeRepo}${codeLink}`} rel="noopener noreferrer" target="_blank">
				view Code
			</a>
		</div>
	);
}
