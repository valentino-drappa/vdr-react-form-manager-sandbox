import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { BasicRouter } from './basic/menu/Basic.router';
import { ValidatorRouter } from './validator/menu/Validator.router';
import { MutationRouter } from './mutation/menu/Mutation.router';
import { AppMenu } from './menu/AppMenu.component';
import { codeRepo, npmRepo } from './constant/App.constant';
import { AdvancedRouter } from './advanced/menu/Advanced.router';
import { FormRouter } from './form/menu/Form.router';
function App() {
	return (
		<div className="bg-gray-100 w-screen h-screen p-10">
			<div className="bg-orange-300 py-2 pl-2">
				<i className="fa fa-exclamation-triangle mr-2" aria-hidden="true" />under construction + using the
				lastest version of vdr-react-form-manager
			</div>
			<h1 className="text-2xl">vdr-react-form-manager-sandbox</h1>
			<div className="mb-2">
				<a className="text-blue-700 underline" href={codeRepo} rel="noopener noreferrer" target="_blank">
					Full code here
				</a>
				<a className="ml-2 text-blue-700 underline" href={npmRepo} rel="noopener noreferrer" target="_blank">
					npm repository
				</a>
			</div>
			<hr />
			<p className="pt-3 pb-2">Welcome to vdr-react-form-manager-sandbox</p>
			<p className="pb-2"> You will find severals examples using the vdr-react-form-manager library.</p>
			<Router>
				<AppMenu />
				<Route path="/basic" component={BasicRouter} />
				<Route path="/form" component={FormRouter} />
				<Route path="/validator" component={ValidatorRouter} />
				<Route path="/mutation" component={MutationRouter} />
				<Route path="/advanced" component={AdvancedRouter} />
				<Redirect path="/" to="/basic" />
			</Router>
		</div>
	);
}

export default App;
