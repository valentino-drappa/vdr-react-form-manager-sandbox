import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { InputTextComponent } from './basic/InputText.component';
import { InputCheckBoxComponent } from './basic/InputCheckBox.component';
import { InputSelectBoxComponent } from './basic/InputSelectBox.component';
import { InputRadioComponent } from './basic/InputRadio.component';
import { InputTextAeraComponent } from './basic/InputTextAera.component';
import { BasicRouter } from './basic/Basic.router';
import { ValidatorRouter } from './validators/Validator.router';
function App() {
	return (
		<div className="bg-gray-100 w-screen h-screen p-10">
			<h1 className="text-2xl">vdr-react-form-manager</h1>
			<hr />
			<p className="py-6">
				Welcome to vdr-react-form-manager. You will find severals examples using the library.
			</p>
      <Router>
        <BasicRouter />
        <ValidatorRouter />
      </Router>
		</div>
      
	);
}

export default App;
