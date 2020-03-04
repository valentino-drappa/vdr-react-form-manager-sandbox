import React from 'react';
import { Route } from 'react-router-dom';
import { InputTextComponent } from '../basic/InputText.component';
import { InputCheckBoxComponent } from '../basic/InputCheckBox.component';
import { InputSelectBoxComponent } from '../basic/InputSelectBox.component';
import { InputRadioComponent } from '../basic/InputRadio.component';
import { InputTextAeraComponent } from '../basic/InputTextAera.component';
import { BasicNavigation } from './Basic.navigation';

export function BasicRouter() {
  return (
    <React.Fragment>
      <h2 className="text-xl underline py-3">Basics</h2>
      <div className="flex flex-row items-start">
        <BasicNavigation />
          <Route exact path="/basic/text" component={InputTextComponent} />
          <Route exact path="/basic/checkbox" component={InputCheckBoxComponent} />
          <Route exact path="/basic/selectbox" component={InputSelectBoxComponent} />
          <Route exact path="/basic/radio" component={InputRadioComponent} />
          <Route exact path="/basic/textaera" component={InputTextAeraComponent} />              
      </div>
  </React.Fragment>
  )
}