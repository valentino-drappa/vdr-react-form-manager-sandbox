import React from 'react';
import { Route } from 'react-router-dom';
import { AdvancedNavigation } from './Advanced.navigation';
import { AdvancedLastFiedUpdatedComponent } from '../AdvancedLastFiedUpdated.component';
import { AdvancedInfos } from './AdvancedInfos.component';

export function AdvancedRouter() {
	return (
		<React.Fragment>
			<AdvancedInfos />
			<div className="flex flex-row items-start">
				<AdvancedNavigation />
				<Route exact path="/advanced/lastfiedupdated" component={AdvancedLastFiedUpdatedComponent} />
			</div>
		</React.Fragment>
	);
}
