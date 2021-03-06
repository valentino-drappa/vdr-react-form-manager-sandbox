import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import { AppMenu } from './menu/AppMenu.component';
import { codeRepo, npmRepo } from './constant/App.constant';
function App() {
	return (
		<div className="bg-gray-100">
			<div className="bg-orange-300 py-2 pl-2">
				<i className="fa fa-exclamation-triangle mr-2" aria-hidden="true" />under construction + using the
				latest version of vdr-react-form-manager
			</div>
			<h1 className="text-2xl">vdr-react-form-manager-sandbox</h1>
			<div className="my-3">
				<p className="pt-3 pb-2">
					Welcome to vdr-react-form-manager-sandbox. You will find severals examples using the
					vdr-react-form-manager library.
				</p>
				<a
					className="ml-2 md:ml-0 text-blue-700 underline"
					href={codeRepo}
					rel="noopener noreferrer"
					target="_blank"
				>
					Full code here
				</a>
				<a className="ml-2 text-blue-700 underline" href={npmRepo} rel="noopener noreferrer" target="_blank">
					npm repository
				</a>
				<a
					className="inline-block mt-2 md:inline md:mt-0 ml-2 bg-gray-200 p-2 border border-gray-300  overflow-x-hidden"
					href="mailto:vdrdev1979@gmail.com"
				>
					<i className="fa fa-envelope-o pr-2" aria-hidden="true" />any questions ?
				</a>
			</div>
			<hr />
			<Router>
				<AppMenu />
				<Redirect path="/" to="/basic/text" />
			</Router>
		</div>
	);
}

export default App;
