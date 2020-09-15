import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-group',
  templateUrl: './formly-field-group.component.html',
  styleUrls: ['./formly-field-group.component.css']
})
export class FormlyFieldGroupComponent extends FieldType {

  constructor(){
    super();
    this.field.fieldGroup
  }
}
