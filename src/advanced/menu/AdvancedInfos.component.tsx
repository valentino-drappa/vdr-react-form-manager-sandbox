import React from 'react';
import { menuInfosClasses } from '../../constant/App.constant';

export function AdvancedInfos() {
	const { constainer, title, description } = menuInfosClasses;
	return (
		<React.Fragment>
			<div className={constainer}>
				<span className={title}>Advanced</span>
				<span className={description}>Advanced concepts</span>
			</div>
		</React.Fragment>
	);
}
