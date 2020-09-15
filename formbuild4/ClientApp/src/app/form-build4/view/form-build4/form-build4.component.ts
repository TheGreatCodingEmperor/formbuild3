import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'app-form-build4',
  templateUrl: './form-build4.component.html',
  styleUrls: ['./form-build4.component.css']
})
export class FormBuild4Component implements OnInit {

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };

  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  }];
  options = {};

  constructor() {
    this.form = new FormGroup({});
    this.options = {};
  }

  ngOnInit() {
  }

  submit(model) {
    console.log(model);
  }

}
