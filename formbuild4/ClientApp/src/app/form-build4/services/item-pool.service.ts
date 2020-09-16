import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class ItemPoolService {
  //#region 【item pools】
  itemPool = [
    {
      key: 'email2',
      type: 'input',
      templateOptions: {
        label: 'Email address2',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'email5',
      type: 'select',
      templateOptions: {
        label: 'Email address5',
        required: true,
        options: [
          { label: 123, value: 4 },
          { label: 1234, value: 5 }
        ]
      }
    }, {
      key: 'group',
      type: 'group',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      fieldGroup: [
        {
          key: 'email3',
          type: 'input',
          templateOptions: {
            label: 'Email address3',
            placeholder: 'Enter email',
            required: true,
          }
        }
      ]
    }
  ]
  //#endregion
  constructor() { }
}
