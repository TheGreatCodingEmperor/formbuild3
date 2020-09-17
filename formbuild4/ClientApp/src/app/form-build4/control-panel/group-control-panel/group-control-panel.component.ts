import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BasicControlPanelComponent } from '../basic-control-panel/basic-control-panel.component';

@Component({
  selector: 'app-group-control-panel',
  templateUrl: './group-control-panel.component.html',
  styleUrls: ['./group-control-panel.component.css']
})
export class GroupControlPanelComponent extends BasicControlPanelComponent implements OnInit {
  constructor(){
    super();
  }
  ngOnInit() {

  }

}
