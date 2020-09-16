import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormlyConfig, FormlyFieldConfig, FormlyForm, FormlyFormBuilder } from '@ngx-formly/core';
import { DoCheck, OnChanges, Input, SimpleChanges, Optional, EventEmitter, Output, OnDestroy, Attribute, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormArray, FormGroupDirective, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, switchMap, distinctUntilChanged, take } from 'rxjs/operators';
import { FormBuild4Service } from '../../services/form-build4.service';
import { ItemControlPanelComponent } from '../../component/item-control-panel/item-control-panel.component';
import { ItemPoolService } from '../../services/item-pool.service';

@Component({
  selector: 'app-design-formly-form',
  templateUrl: './design-formly-form.component.html',
  styleUrls: ['./design-formly-form.component.css']
})
export class DesignFormlyFormComponent extends FormlyForm implements OnInit,OnDestroy {
  /** drop 依據 ID */
  @Input()Id = 'stop';
  /** 可 Drop 的 array id */
  dropList: string[] = [];

  constructor(
    formlyBuilder: FormlyFormBuilder,
    formlyConfig: FormlyConfig,
    ngZone: NgZone,
    // tslint:disable-next-line
    @Attribute('immutable') immutable,
    @Optional() parentFormGroup: FormGroupDirective,
    private formBuild4Service: FormBuild4Service,
    private itemPoolService: ItemPoolService,
    private cdref: ChangeDetectorRef
    ) {
    super(formlyBuilder, formlyConfig, ngZone, immutable, parentFormGroup);
  }

  ngOnInit(){
    this.notifyInit();
  }

  /**
   * @todo 取消監聽 更新 drop list
   */
  ngOnDestroy(){
  }

  /** 初始化 接收廣播 */
  notifyInit(){
  }

  /** 對此物件控制*/
  itemControl(event:any,field:FormlyFieldConfig){
    event.stopPropagation();
    this.formBuild4Service.notifyItemControl.next(field);
  }

  /** 廣播 drop 這個物件 */
  drop(event:any) {
    this.formBuild4Service.notifyDrop.next(event);
  }
}
