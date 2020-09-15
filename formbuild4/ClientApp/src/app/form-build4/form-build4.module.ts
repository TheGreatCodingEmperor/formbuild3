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

@NgModule({
  declarations: [FormBuild4Component,FormlyFieldInput, FormlyFieldGroupComponent, DesignFormlyFormComponent, DesignFormlyFieldComponent],
  imports: [
    FormlyMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormBuild4RoutingModule,
    DragDropModule,
    FormlyModule.forRoot({
      types:[
        { name:'input', component: FormlyFieldInput }
      ]
    })
  ]
})
export class FormBuild4Module { }
