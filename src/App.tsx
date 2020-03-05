import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { BasicRouter } from './basic/menu/Basic.router';
import { ValidatorRouter } from './validator/menu/Validator.router';
import { MutationRouter } from './mutation/menu/Mutation.router';
import { AppMenu } from './menu/AppMenu.component';
import { codeRepo } from './constant/App.constant';
function App() {
	return (
		<div className="bg-gray-100 w-screen h-screen p-10">
			<h1 className="text-2xl">vdr-react-form-manager-sandbox</h1>
			<hr />
			<p className="pt-3 pb-2">Welcome to vdr-react-form-manager-sandbox</p>
			<p className="pb-4">
				{' '}
				You will find severals examples using the vdr-react-form-manager library.
				<a className="ml-2 text-blue-700 underline" href={codeRepo} rel="noopener noreferrer" target="_blank">
					Full code here
				</a>
			</p>
			<Router>
				<AppMenu />
				<Route path="/basic" component={BasicRouter} />
				<Route path="/validator" component={ValidatorRouter} />
				<Route path="/mutation" component={MutationRouter} />
				<Redirect path="/" to="/basic" />
			</Router>
		</div>
	);
}

export default App;
