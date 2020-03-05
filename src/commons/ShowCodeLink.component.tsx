//https://github.com/valentino-drappa/vdr-react-form-manager-sandbox/blob/master/src/basic/InputText.component.tsx

import React from 'react';

type Props = {
	codeLink: string;
};

const codeRepo = 'https://github.com/valentino-drappa/vdr-react-form-manager-sandbox/blob/master/src/';

export function ShowCodeLink({ codeLink }: Props) {
	return (
		<div className="pl-2 text-blue-700 underline">
			<a href={`${codeRepo}${codeLink}`} rel="noopener noreferrer" target="_blank">
				view Code
			</a>
		</div>
	);
}
