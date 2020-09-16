import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-select',
    template: `
 <select [formControl]="formControl">
  <option *ngFor="let opt of  to.options" [label]="opt.label">{{opt.value}}</option>
</select>
 `,
})
export class FormlyFieldSelect extends FieldType {
}