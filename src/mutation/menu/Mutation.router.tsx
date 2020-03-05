import React from 'react';
import { Route } from 'react-router-dom';
import { MutationNavigation } from './Mutation.navigation';
import { BasicInputMutationComponent } from '../BasicInputMutation.component';
import { MutationInfos } from './MutationInfos.component';
import { ResetFormComponent } from '../ResetForm.component';

export function MutationRouter() {
	return (
		<React.Fragment>
			<MutationInfos />
			<div className="flex flex-row items-start">
				<MutationNavigation />
				<Route exact path="/mutation/input" component={BasicInputMutationComponent} />
				<Route exact path="/mutation/reset-form" component={ResetFormComponent} />
			</div>
		</React.Fragment>
	);
}
