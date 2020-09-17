import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuild4Service } from '../../services/form-build4.service';
import { ItemPoolService } from '../../services/item-pool.service';

@Component({
  selector: 'app-item-control-panel',
  templateUrl: './item-control-panel.component.html',
  styleUrls: ['./item-control-panel.component.css']
})
export class ItemControlPanelComponent implements OnInit,OnDestroy {
  item:any;
  //#region 【notify】
  notifyBlock = true;
  notifyItenControlRef:Subscription;
  //#endregion

  constructor(
    private formBuild4Service: FormBuild4Service,
    private itemPoolService: ItemPoolService
  ) { }

  ngOnInit() {
    this.notifyInit();
  }
  ngOnDestroy(){
    this.notifyItenControlRef.unsubscribe();
  }
  /** 初始化監聽廣播 */
  notifyInit(){
    setTimeout(() => {
      this.notifyBlock = false;
    }, 500);
    this.notifyItenControlRef = this.formBuild4Service.notifyItemControl.subscribe(
      res=>{
        if(this.notifyBlock || !res)return;
        this.item = res;
      }
    );
  }
}
