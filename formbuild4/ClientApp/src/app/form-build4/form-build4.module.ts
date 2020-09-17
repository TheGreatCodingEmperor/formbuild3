import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuild4RoutingModule } from './form-build4-routing.module';
import { FormBuild4Component } from './view/form-build4/form-build4.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldInput } from './field-types/input';
import { FormlyMaterialModule } from '../modules/formly-material.module';
import { FormlyFieldGroupComponent } from './field-types/formly-field-group/formly-field-group.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DesignFormlyFormComponent } from './custom-formly/design-formly-form/design-formly-form.component';
import { DesignFormlyFieldComponent } from './custom-formly/design-formly-field/design-formly-field.component';
import { FormlyFieldSelect } from './field-types/select';
import { FormsModule } from '@angular/forms';
import { ItemControlPanelComponent } from './component/item-control-panel/item-control-panel.component';
import { GroupControlPanelComponent } from './control-panel/group-control-panel/group-control-panel.component';
import { BasicControlPanelComponent } from './control-panel/basic-control-panel/basic-control-panel.component';

@NgModule({
  declarations: [FormBuild4Component,
    FormlyFieldInput, 
    FormlyFieldGroupComponent,
    FormlyFieldSelect,
    DesignFormlyFormComponent, 
    DesignFormlyFieldComponent, 
    ItemControlPanelComponent, 
    GroupControlPanelComponent, 
    BasicControlPanelComponent],
  imports: [
    FormlyMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormBuild4RoutingModule,
    DragDropModule,
    FormsModule,
    FormlyModule.forRoot({
      types:[
        { name:'input', component: FormlyFieldInput },
        { name:'group', component: FormlyFieldGroupComponent },
        { name:'select', component: FormlyFieldSelect }
      ]
    })
  ]
})
export class FormBuild4Module { }
