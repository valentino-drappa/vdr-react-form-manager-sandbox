import React from 'react';
import { menuInfosClasses } from '../../constant/App.constant';
type Props = {
	menuTitle: string;
	menuDescription: string;
};

export function MenuInfos({ menuTitle, menuDescription }: Props) {
	const { constainer, title, description } = menuInfosClasses;
	return (
		<React.Fragment>
			<div className={constainer}>
				<span className={title}>{menuTitle}</span>
				<span className={description}>{menuDescription}</span>
			</div>
		</React.Fragment>
	);
}
