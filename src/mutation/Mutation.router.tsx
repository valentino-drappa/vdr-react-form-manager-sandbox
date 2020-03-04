import React from 'react';
import { Route } from 'react-router-dom';
import { MutationNavigation } from './Mutation.navigation';
import { BasicInputMutationComponent } from './BasicInputMutation.component';

export function MutationRouter() {
	return (
		<React.Fragment>
			<h2 className="text-xl underline py-3">Mutations</h2>
			<p className="mb-2">To update your input properties, use the updateInputs function.</p>
			<p className="py-2 pl-1 mb-2 bg-orange-300">
				<span className="inline-block mr-2 text-xl">usage:</span>updateInputs(IFormInputMutation)
			</p>
			<div className="flex flex-row items-start">
				<MutationNavigation />
				<Route exact path="/mutation/input" component={BasicInputMutationComponent} />
			</div>
		</React.Fragment>
	);
}
