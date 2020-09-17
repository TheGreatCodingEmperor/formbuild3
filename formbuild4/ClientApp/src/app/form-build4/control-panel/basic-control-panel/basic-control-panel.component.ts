import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-basic-control-panel',
  templateUrl: './basic-control-panel.component.html',
  styleUrls: ['./basic-control-panel.component.css']
})
export class BasicControlPanelComponent implements OnInit {
  @Input() item:FormlyFieldConfig;
  constructor() { }

  ngOnInit() {
  }

}
