import React from 'react';
import { Route } from 'react-router-dom';
import { MutationNavigation } from './Mutation.navigation';
import { BasicInputMutationComponent } from '../BasicInputMutation.component';
import { MutationInfos } from './MutationInfos.component';

export function MutationRouter() {
	return (
		<React.Fragment>
			<MutationInfos />
			<div className="flex flex-row items-start">
				<MutationNavigation />
				<Route exact path="/mutation/input" component={BasicInputMutationComponent} />
			</div>
		</React.Fragment>
	);
}
